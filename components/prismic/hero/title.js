import React from 'react'
import PrismicDOM from 'prismic-dom'

/**
 * HeroTitle component
 * Take the title and outputs the content
 * @class
 *
 */
export default class HeroTitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h1 className="title-xl">{this.props.children}</h1>
  }
}
