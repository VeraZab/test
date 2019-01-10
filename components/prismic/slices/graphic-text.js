import React from 'react';

import Pretitle from './slice-elements/pretitle';
import Title from './slice-elements/title';
import Subtitle from './slice-elements/subtitle';
import {getComponentClass} from './slice-elements/utils';
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
          </div>
          <Graphic primary={primary} />
        </div>
      </section>
    );
  }
}
