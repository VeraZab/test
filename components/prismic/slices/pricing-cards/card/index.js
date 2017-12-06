import React from 'react'
import PropTypes from 'prop-types'
import PricingCardHeader from 'components/prismic/slices/pricing-cards/card/header'
import PricingCardFeatures from 'components/prismic/slices/pricing-cards/card/features'

const shortid = require('shortid')


class PricingCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  getChildContext() {
    const {card: {primary: content, items: features}} = this.props

    return {
      content,
      features
    };
  }

  render() {
    const {style, className} = this.props;
    return (
      <div className="pricing__card" style={ style }>
        <div className="pricing__card__wrapper">
          <PricingCardHeader/>
          <PricingCardFeatures/>
        </div>
      </div>
    )
  }
}


PricingCard.propTypes = {
  card: PropTypes.object.isRequired,
}
PricingCard.childContextTypes = {
  content: PropTypes.object,
  features: PropTypes.array,
}


export default PricingCard


