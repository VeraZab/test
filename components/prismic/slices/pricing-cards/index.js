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
import PricingCard from 'components/prismic/slices/pricing-cards/card'

const shortid = require('shortid')


class PricingCards extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {cards} = this.props

    const Cards = cards.map(card => <PricingCard key={ shortid.generate() } cardWidth={`${100/cards.length}%`} card={ card }/>)
    return (
      <div className="pricing__cards">
        <div className="pricing__cards__wrapper" >
          { Cards }
        </div>
      </div>
    )
  }
}

PricingCards.propTypes = {
  cards: PropTypes.array.isRequired,
}
export default PricingCards


