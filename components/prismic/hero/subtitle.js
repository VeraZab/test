import React from 'react'
import PrismicDOM from 'prismic-dom'

/**
 * HeroSubtitle component
 * Wrapper
 * Take the subtitle and outputs the content
 * @class
 *
 */
export default class HeroSubtitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h2 className="title-sm pretitle">{this.props.children}</h2>
  }
}
