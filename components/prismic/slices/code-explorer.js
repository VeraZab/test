import React from 'react';

import Pretitle from './slice-elements/pretitle';
import Title from './slice-elements/title';
import Subtitle from './slice-elements/subtitle';
import {getComponentClass} from './slice-elements/utils';
import Body from './slice-elements/body';
import Actions from './slice-elements/actions';
import Graphic from './slice-elements/graphic';
import CodeExplorerSlice from 'components/prismic/slices/code-explorer-slice';

export default class CodeExplorer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      data: {primary, slice_type},
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
            <Actions primary={primary} />
          </div>
          <Graphic primary={primary} />
          <div className="github-stars">
            <CodeExplorerSlice data={data} />
          </div>
        </div>
      </section>
    );
  }
}
