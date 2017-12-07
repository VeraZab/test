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

    const card_styles = {
      // gridTemplateColumns: `repeat(auto-fill, minmax(300px, 1fr))`
    }

    const Cards = cards.map(card => <PricingCard key={ shortid.generate() } card={ card }/>)
    return (
      <div className="pricing__cards">
        <div className="pricing__cards__wrapper" style={ card_styles }>
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


