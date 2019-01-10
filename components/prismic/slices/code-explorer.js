import React from 'react';

import SliceOuter from './slice-elements/slice-outer';
import SliceInner from './slice-elements/slice-inner';
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
      data: {primary},
    } = this.props;

    return (
      <SliceOuter data={data}>
        <SliceInner data={data}>
          <Body primary={primary} />
          <Actions primary={primary} />
        </SliceInner>
        <Graphic primary={primary} />
        <div className="content-section-p-area--code-explorer">
          <CodeExplorerSlice data={data} />
        </div>
      </SliceOuter>
    );
  }
}
