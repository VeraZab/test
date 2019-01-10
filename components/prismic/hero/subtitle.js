import React from 'react';
import Typography from 'components/styled/typography';

/**
 * HeroSubtitle component
 * Wrapper
 * Take the subtitle and outputs the content
 * @class
 *
 */
export default class HeroSubtitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Typography.h2 pretitle>{this.props.children}</Typography.h2>;
  }
}
