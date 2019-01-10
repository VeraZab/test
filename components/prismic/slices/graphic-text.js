import React from 'react';

import SliceOuter from './slice-elements/slice-outer';
import SliceInner from './slice-elements/slice-inner';
import Body from './slice-elements/body';
import Graphic from './slice-elements/graphic';
import Button from 'components/prismic/button';
import shortid from 'shortid';

export default class GraphicText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      data: {primary, items},
    } = this.props;

    return (
      <SliceOuter data={data}>
        <SliceInner data={data}>
          <Body primary={primary} />
          {items && items.length ? (
            <div className={'content-section-p-actions'}>
              <div className="content-section-p-actions-wrapper buttons">
                {items.map(button => {
                  return <Button key={shortid.generate()} data={button} />;
                })}
              </div>
            </div>
          ) : null}
        </SliceInner>
        <Graphic primary={primary} />
      </SliceOuter>
    );
  }
}
