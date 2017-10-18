import React from 'react'
import PrismicDOM from 'prismic-dom'
import Button from 'components/prismic/button'

/**
 * HeroActions component
 * Wrapper
 * Takes the buttons for the hero and outputs them
 * @class
 *
 */
export default class HeroActions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="hero-prismic-actions">{this.props.children}</div>
  }
}
