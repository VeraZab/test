import React from 'react';
import shortid from 'shortid';

import Pretitle from './slice-elements/pretitle';
import Title from './slice-elements/title';
import Subtitle from './slice-elements/subtitle';
import {getComponentClass} from './slice-elements/utils';
import Body from './slice-elements/body';
import Actions from './slice-elements/actions';
import GraphicDisplay from './slice-elements/graphic-display';

export default class GraphicTextWithLogos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {primary, items, slice_type},
    } = this.props;

    const componentClass = 'content-section-p';
    const classes = getComponentClass(primary, slice_type);

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
                <GraphicDisplay noBlur key={shortid.generate()} data={logo} />
              ))}
            </div>
            <Body primary={primary} />
            <Actions primary={primary} />
          </div>
        </div>
      </section>
    );
  }
}
