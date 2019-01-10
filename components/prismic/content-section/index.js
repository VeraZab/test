import React from 'react';
import PrismicDOM from 'prismic-dom';

import GraphicDisplay from '../slices/slice-elements/graphic-display';
import Button from 'components/prismic/button';
import Browser from 'components/browser';
import Phone from 'components/phone';
import GithubStarsSlice from 'components/prismic/slices/github_stars';
import CodeExplorer from 'components/prismic/slices/code-explorer';
import Iframes from 'components/prismic/slices/iframe';

import PricingCards from 'components/prismic/slices/pricing-cards';
import {constructButtons} from 'lib/construct-buttons';

import shortid from 'shortid';

/**
 * ContentSection component
 * Main wrapper component
 * @class
 *
 */

export default class ContentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /** Destructure props */
    const {
      data,
      data: {primary, items, slice_type},
      className,
    } = this.props;

    if (primary && primary.published && primary.published === 'false') {
      return null;
    }

    /** Define the component class name */
    const componentClass = 'content-section-p';

    /** The classes variable */
    let classes = componentClass;

    const noGraphic = !primary.graphic || (primary.graphic && !primary.graphic.url);

    if (noGraphic) {
      classes += ' no-graphic';
    }

    /**
     * If someone has added classes to this component, let's append them to the classes variable
     */
    if (className) {
      classes += ' ' + className;
    }

    classes += ' ' + slice_type;

    /**
     * Layout
     *
     * These values will the arrangement of the elements in the content section.
     *
     * Available values:
     *
     * row-auto                 -- will automatically alternate which side the graphic is on (even/odd)
     * row-graphic-left         -- manually designate graphic on left
     * row-graphic-right        -- manually designate graphic on right
     * column-graphic-top       -- vertical layout, graphic on top
     * column-graphic-bottom    -- vertical layout, graphic on bottom
     */

    if (!primary.layout) {
      primary.layout = 'row-auto';
    }
    classes += ' ' + componentClass + '-layout--' + primary.layout;

    /**
     * Alignment
     *
     * These apply if the content section is in a column layout.
     * They are the standard justification settings, left, center, right...
     *
     * Available values:
     *
     * left     -- default
     * center   -- center alignment
     * right    -- right alignment
     */
    if (!primary.alignment) {
      primary.alignment = 'left';
    }
    classes += ' ' + componentClass + '-align--' + primary.alignment;

    /**
     * Style
     *
     * These values will adjust classes that change the visual appearance of the content section.
     *
     * Available values:
     *
     * default -- The standard content section, which will alternate between white and $color-rhino-light-4 for its background color
     * gradient_purple -- Uses the same styling as the purple gradient used in hero sections
     * gradient_dark-blue -- Uses a darker blue gradient, white text
     * gradient_blue -- Uses a blue gradient for its background, white text
     * graphic_blue_pipes -- Uses a blue gradient and a pipe graphic for its background
     * graphic_white_dotted-lines -- White background with angled, different colored dotted lines in its background
     */
    if (!primary.style) {
      primary.style = 'default';
    }
    classes += ' ' + componentClass + '-style--' + primary.style;

    if (primary.graphic_style === 'bleed') {
      classes += ' ' + componentClass + '-style--bleed-wrapper';
    }

    classes += ` ${componentClass}-proportions--${primary.proportions}`;

    /*
     * Body
     *
     * This checks to see if there are two columns (two enties for body, body + body_two),
     * and if so it will display both
     * otherwise it will just display the one
     */
    const body = () => {
      if (
        primary.body &&
        primary.body.length &&
        primary.body_two &&
        primary.body_two.length &&
        primary.body_two[0].text !== ''
      ) {
        return (
          <div className="content-section-p-body content-section-p-body-columns">
            <div className="content-section-p-body-wrapper">
              <div
                className="content-section-p-body-column-one"
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(primary.body),
                }}
              />
              <div
                className="content-section-p-body-column-two"
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(primary.body_two),
                }}
              />
            </div>
          </div>
        );
      }
      return (
        <div className="content-section-p-body">
          <div
            className="content-section-p-body-wrapper"
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(primary.body),
            }}
          />
        </div>
      );
    };

    /*
     * Graphic
     */
    const graphic = () => {
      /**
       * graphic_style: browser
       * If the content section has a graphic uploaded, let's show it.
       */
      if (primary.graphic && primary.graphic.url) {
        /**
         * If the graphic style is set to browser, we will wrap it in a browser component.
         */
        if (primary.graphic_style === 'browser') {
          return (
            <div className={componentClass + '-graphic ' + componentClass + '-area'}>
              <Browser>
                <GraphicDisplay data={primary} />
              </Browser>
            </div>
          );
        }
        /**
         * If the graphic style is set to phone, we will wrap it in a phone component.
         */
        if (primary.graphic_style === 'phone') {
          return (
            <div className={componentClass + '-graphic ' + componentClass + '-area'}>
              <Phone>
                <GraphicDisplay data={primary} />
              </Phone>
            </div>
          );
        }
        /**
         * graphic_style: bleed
         * We display bleed images a little bit differently
         */
        if (primary.graphic_style === 'bleed') {
          return (
            <div
              className={
                componentClass +
                '-graphic ' +
                componentClass +
                '-graphic--style-bleed-parent ' +
                componentClass +
                '-area'
              }
            >
              <GraphicDisplay background={true} data={primary} />
            </div>
          );
        }
        return (
          <div className={componentClass + '-graphic ' + componentClass + '-area'}>
            <GraphicDisplay data={primary} />
          </div>
        );
      }
      return null;
    };

    /*
     * Actions
     * These are our buttons
     */
    const actions = () => {
      /**
       * slice_type: graphic_with_text
       *
       * This is how I was handling the buttons before, as the repeated group in the content section
       * but I need to update this to reflect the new way of just including at most 3 buttons (see below)
       */
      if (slice_type === 'graphic_with_text') {
        if (items && items.length) {
          return (
            <div className={'content-section-p-actions'}>
              <div className="content-section-p-actions-wrapper buttons">
                {items.map((button, i) => {
                  return <Button key={shortid.generate()} data={button} />;
                })}
              </div>
            </div>
          );
        }
        return null;
      } else {
        /*
         * slice_type: all others
         *
         * This is the new way of dealing with buttons
         * it'll check to see if each have values
         * and if so it'll push it to a new array which we then
         * iterate over and display the buttons.
         */

        const buttons = constructButtons(data.primary);

        if (buttons.length) {
          return (
            <div className={'content-section-p-actions'}>
              <div className="content-section-p-actions-wrapper buttons">
                {buttons.map((button, i) => {
                  return <Button key={shortid.generate()} data={button} />;
                })}
              </div>
            </div>
          );
        } else {
          return null;
        }
      }
    };

    const Pretitle =
      primary.pretitle !== null ? (
        <div className="content-section-p-pretitle">
          <div className="content-section-p-pretitle-wrapper">
            <h3>{primary.pretitle}</h3>
          </div>
        </div>
      ) : null;

    const Title =
      primary.title && primary.title.length && primary.title[0].text !== '' ? (
        <div className={'content-section-p-title'}>
          <div
            className="content-section-p-title-wrapper"
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(primary.title),
            }}
          />
        </div>
      ) : null;

    const Subtitle =
      primary.subtitle && primary.subtitle.length && primary.subtitle[0].text !== '' ? (
        <div className={'content-section-p-subtitle'}>
          <div
            className="content-section-p-subtitle-wrapper"
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(primary.subtitle),
            }}
          />
        </div>
      ) : null;

    const GithubStarsSection =
      slice_type === 'cs-github-stars' ? (
        <div className="github-stars">
          <GithubStarsSlice key={shortid.generate()} slice={data} />
        </div>
      ) : null;

    const CodeExplorerSection =
      slice_type === 'cs-code-explorer' ? (
        <div className="content-section-p-area--code-explorer">
          <CodeExplorer data={data} />
        </div>
      ) : null;

    const IframesSection = slice_type === 'cs-iframe' && <Iframes data={items} />;

    return (
      <section className={classes}>
        <div className="content-section-p-wrapper">
          <div className={componentClass + '-details ' + componentClass + '-area'}>
            {Pretitle}
            {Title}
            {Subtitle}
            {body()}
            {actions()}
            {CodeExplorerSection}
            {IframesSection}
          </div>
          {graphic()}
          {GithubStarsSection}
        </div>
      </section>
    );
  }
}
