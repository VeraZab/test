import React from 'react';
import shortid from 'shortid';

import SliceOuter from './slice-elements/slice-outer';
import SliceInner from './slice-elements/slice-inner';
import Body from './slice-elements/body';
import Actions from './slice-elements/actions';
import GraphicDisplay from './slice-elements/graphic-display';

export default class GraphicTextWithLogos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      data: {primary, items},
    } = this.props;

    const componentClass = 'content-section-p';

    return (
      <SliceOuter data={data}>
        <SliceInner data={data}>
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
        </SliceInner>
      </SliceOuter>
    );
  }
}
