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
    return <h2 className="title-sm">{this.props.children}</h2>
  }
}
