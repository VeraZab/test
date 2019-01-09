import React from 'react';
import PrismicDOM from 'prismic-dom';
import shortid from 'shortid';

import Graphic from 'components/prismic/content-section/graphic';
import Button from 'components/prismic/button';
import {constructButtons} from 'lib/construct-buttons';

import Pretitle from './slice-elements/pretitle';
import Title from './slice-elements/title';
import Subtitle from './slice-elements/subtitle';
import {getComponentClass} from './slice-elements/utils';

class GraphicTextWithLogos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {primary, items},
    } = this.props;

    const componentClass = 'content-section-p';
    const classes = getComponentClass(primary, 'graphic_with_text_logos');
    const buttons = constructButtons(primary);

    return (
      <section className={classes}>
        <div className="content-section-p-wrapper">
          <div className={componentClass + '-details ' + componentClass + '-area'}>
            {Boolean(primary.pretitle) && <Pretitle pretitle={primary.pretitle} />}
            {Boolean(primary.title && primary.title.length && primary.title[0].text !== '') && (
              <Title title={primary.title} />
            )}
            {Boolean(
              primary.subtitle && primary.subtitle.length && primary.subtitle[0].text !== ''
            ) && <Subtitle subtitle={primary.subtitle} />}
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
              {items.map(logo => (
                <Graphic noBlur key={shortid.generate()} data={logo} />
              ))}
            </div>

            {primary.body &&
              primary.body.length && (
                <div className={'content-section-p-body'}>
                  <div
                    className="content-section-p-body-wrapper"
                    dangerouslySetInnerHTML={{
                      __html: PrismicDOM.RichText.asHtml(primary.body),
                    }}
                  />
                </div>
              )}

            {buttons.length > 0 && (
              <div className={'content-section-p-actions'}>
                <div className="content-section-p-actions-wrapper buttons">
                  {buttons.map(button => (
                    <Button key={shortid.generate()} data={button} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default GraphicTextWithLogos;
