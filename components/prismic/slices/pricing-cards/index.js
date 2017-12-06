/**
 * Pricing Cards component
 *
 * This component will take data in and render pricing cards from the pricing-cards
 * custom type from prismic.
 *
 * @class
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

const shortid = require('shortid')


class PricingCards extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    let {cards} = this.props
    return (
      <div className="pricing__cards">
        <div className="pricing__cards__wrapper">
          Pricing Cards
        </div>
      </div>
    )
  }
}

PricingCards.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default PricingCards


