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

class GraphicTextWithSlides extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {primary, items},
    } = this.props;

    const componentClass = 'content-section-p';
    const classes = getComponentClass(primary, 'graphic_with_text_slides');
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
            {items.map(slide => {
              return <Graphic key={shortid.generate()} data={slide} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default GraphicTextWithSlides;
