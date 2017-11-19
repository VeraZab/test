import React from 'react'
import PrismicDOM from 'prismic-dom'

import Graphic from './graphic'
import Button from 'components/prismic/button'
import { Browser } from 'components/browser'
import Phone from 'components/phone'
import GithubStarsSlice from 'components/prismic/slices/github_stars'
import CodeExplorer from 'components/prismic/slices/code-explorer'
import AdvancedCards from 'components/prismic/slices/advanced-cards'

const shortid = require('shortid')

/**
 * ContentSection component
 * Main wrapper component
 * @class
 *
 */

export default class ContentSection extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // if (IntersectionObserver) {
    //   const sections = document.querySelectorAll('.content-section-p');
    //
    //   const observer = new IntersectionObserver((entries) => {
    //       entries.filter(entry => entry.isIntersecting).forEach(entry => {
    //         entry.target.classList.add('animate-in');
    //       });
    //     },
    //     {
    //       threshold: [0.15]
    //     });
    //
    //   sections.forEach(section => {
    //     observer.observe(section);
    //   });
    // } else {
    //   const sections = document.querySelectorAll('.content-section-p');
    //   sections.forEach(section => {
    //     section.classList.add('ignore-animation');
    //   });
    // }
  }

  render() {
    /** Destructure props */
    const {data: {primary}} = this.props
    const {data: {items}} = this.props

    if(primary && primary.published && primary.published === 'false') {
      return null
    }

    /** Define the component class name */
    const componentClass = 'content-section-p'

    /** The classes variable */
    let classes = componentClass

    /**
     * If someone has added classes to this component,
     * let's append them to the classes variable
     */
    if (this.props.className) {
      classes += ' ' + this.props.className
    }

    classes += ' ' + this.props.data.slice_type

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
      primary.layout = 'row-auto'
    }
    classes += ' ' + componentClass + '-layout--' + primary.layout

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
      primary.alignment = 'left'
    }
    classes += ' ' + componentClass + '-align--' + primary.alignment

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
      primary.style = 'default'
    }
    classes += ' ' + componentClass + '-style--' + primary.style

    if (primary.graphic_style === 'bleed') {
      classes += ' ' + componentClass + '-style--bleed-wrapper'
    }

    classes += ` ${componentClass}-proportions--${primary.proportions}`

    /**
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
          <div
            className={ 'content-section-p-body content-section-p-body-columns' }
          >
            <div className="content-section-p-body-wrapper">
              <div
                className="content-section-p-body-column-one"
                dangerouslySetInnerHTML={ {
                  __html: PrismicDOM.RichText.asHtml(primary.body),
                } }
              />
              <div
                className="content-section-p-body-column-two"
                dangerouslySetInnerHTML={ {
                  __html: PrismicDOM.RichText.asHtml(primary.body_two),
                } }
              />
            </div>
          </div>
        )
      } else {
        return (
          <div className={ 'content-section-p-body' }>
            <div
              className="content-section-p-body-wrapper"
              dangerouslySetInnerHTML={ {
                __html: PrismicDOM.RichText.asHtml(primary.body),
              } }
            />
          </div>
        )
      }
    }

    /**
     * Graphic
     */
    let graphic = () => {
      /**
       * If this content section is graphic_with_text_slides,
       * we're going to render the items as graphics, rather than as actions
       * like in the default content section slice type
       */
      if (this.props.data.slice_type === 'graphic_with_text_logos') {
        return (
          <div
            className={
              componentClass +
              '-graphic ' +
              componentClass +
              '-graphic-logos ' +
              componentClass +
              '-area'
            }
          >
            { items.map((logo, i) => {
              return <Graphic noBlur key={ shortid.generate() } data={ logo }/>
            }) }
          </div>
        )
      }
      /**
       * If this content section is graphic_with_text_slides,
       * we're going to render the items as graphics, rather than as actions
       * like in the default content section slice type
       */
      if (this.props.data.slice_type === 'graphic_with_text_slides') {
        return (
          <div
            className={
              componentClass +
              '-graphic ' +
              componentClass +
              '-graphic-slides ' +
              componentClass +
              '-area'
            }
          >
            { items.map((slide, i) => {
              return <Graphic key={ shortid.generate() } data={ slide }/>
            }) }
          </div>
        )
      }
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
            <div
              className={
                componentClass + '-graphic ' + componentClass + '-area'
              }
            >
              <Browser>
                <Graphic data={ primary }/>
              </Browser>
            </div>
          )
        }
        /**
         * If the graphic style is set to phone, we will wrap it in a phone component.
         */
        if (primary.graphic_style === 'phone') {
          return (
            <div
              className={
                componentClass + '-graphic ' + componentClass + '-area'
              }
            >
              <Phone>
                <Graphic data={ primary }/>
              </Phone>
            </div>
          )
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
              <Graphic background={ true } data={ primary }/>
            </div>
          )
        }
        return (
          <div
            className={ componentClass + '-graphic ' + componentClass + '-area' }
          >
            <Graphic data={ primary }/>
          </div>
        )
      }
      return null
    }

    /**
     * Actions
     * These are our buttons
     */
    let actions = () => {
      /**
       * slice_type: graphic_with_text
       *
       * This is how I was handling the buttons before, as the repeated group in the content section
       * but I need to update this to reflect the new way of just including at most 3 buttons (see below)
       */
      if (this.props.data.slice_type === 'graphic_with_text') {
        if (items && items.length) {
          return (
            <div className={ 'content-section-p-actions' }>
              <div className="content-section-p-actions-wrapper buttons">
                { items.map((button, i) => {
                  return <Button key={ shortid.generate() } data={ button }/>
                }) }
              </div>
            </div>
          )
        } else {
          return null
        }
      } else {
        /**
         * slice_type: all others
         *
         * This is the new way of dealing with buttons
         * it'll check to see if each have values
         * and if so it'll push it to a new array which we then
         * iterate over and display the buttons.
         */

        let buttons = []

        if (this.props.data.primary.button_one_label) {
          buttons.push({
            label: primary.button_one_label,
            link: primary.button_one_link,
            style: primary.button_one_style,
            download: primary.download_attr === 'both' || primary.download_attr === 'button-one'
          })
        }

        if (primary.button_two_label) {
          buttons.push({
            label: primary.button_two_label,
            link: primary.button_two_link,
            style: primary.button_two_style,
            download: primary.download_attr === 'both' || primary.download_attr === 'button-two'
          })
        }

        if (buttons.length) {
          return (
            <div className={ 'content-section-p-actions' }>
              <div className="content-section-p-actions-wrapper buttons">
                { buttons.map((button, i) => {
                  return <Button key={ shortid.generate() } data={ button }/>
                }) }
              </div>
            </div>
          )
        } else {
          return null
        }
      }
    }
    /**
     * If there's a pretitle,
     * let's display it!
     */
    const Pretitle =
      primary.pretitle !== null ? (
        <div className={ 'content-section-p-pretitle' }>
          <div className="content-section-p-pretitle-wrapper">
            <h3>{ primary.pretitle }</h3>
          </div>
        </div>
      ) : null
    /**
     * If there's a title,
     * let's display it!
     */
    const Title =
      primary.title && primary.title.length && primary.title[0].text !== '' ? (
        <div className={ 'content-section-p-title' }>
          <div
            className="content-section-p-title-wrapper"
            dangerouslySetInnerHTML={ {
              __html: PrismicDOM.RichText.asHtml(primary.title),
            } }
          />
        </div>
      ) : null

    /**
     * If there's a Subtitle,
     * let's display it!
     */
    const Subtitle =
      primary.subtitle &&
      primary.subtitle.length &&
      primary.subtitle[0].text !== '' ? (
        <div className={ 'content-section-p-subtitle' }>
          <div
            className="content-section-p-subtitle-wrapper"
            dangerouslySetInnerHTML={ {
              __html: PrismicDOM.RichText.asHtml(primary.subtitle),
            } }
          />
        </div>
      ) : null

    if (this.props.data.slice_type === 'cs-tabs') {
      return (
        <section className={ classes }>
          <div className="content-section-p-wrapper">
            { graphic() }
            <div
              className={
                componentClass + '-details ' + componentClass + '-area'
              }
            >
              { Pretitle }
              { Title }
              { Subtitle }
              { body() }
              { actions() }
            </div>
          </div>
        </section>
      )
    }

    const GithubStarsSection =
      this.props.data.slice_type === 'cs-github-stars' ? (
        <div className="github-stars">
          <GithubStarsSlice key={ shortid.generate() } slice={ this.props.data }/>
        </div>
      ) : null

    const CodeExplorerSection =
      this.props.data.slice_type === 'cs-code-explorer' ? (
        <div className="content-section-p-area--code-explorer">
          <CodeExplorer data={ this.props.data }/>{ ' ' }
        </div>
      ) : null

    const AdvancedCardsSection =
      this.props.data.slice_type === 'cs-advanced-cards' ? (
        <AdvancedCards data={ this.props.data.items }/>
      ) : null

    return (
      <section className={ classes }>
        <div className="content-section-p-wrapper">
          <div
            className={ componentClass + '-details ' + componentClass + '-area' }
          >
            { Pretitle }
            { Title }
            { Subtitle }
            { this.props.data.slice_type === 'graphic_with_text_logos'
              ? graphic()
              : null }

            { body() }

            { /**
             * If there are items, they are buttons
             * let's display them!
             */

              actions() }
            { CodeExplorerSection }
          </div>
          { this.props.data.slice_type !== 'graphic_with_text_logos'
            ? graphic()
            : null }
          { AdvancedCardsSection }
          { GithubStarsSection }
        </div>
      </section>
    )
  }
}
