import React from 'react';

import SliceOuter from './slice-elements/slice-outer';
import SliceInner from './slice-elements/slice-inner';
import Body from './slice-elements/body';
import Actions from './slice-elements/actions';
import Graphic from './slice-elements/graphic';
import GithubStarsSlice from 'components/prismic/slices/github-stars-slice';

export default class GithubStars extends React.Component {
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
        <div className="github-stars">
          <GithubStarsSlice slice={data} />
        </div>
      </SliceOuter>
    );
  }
}
