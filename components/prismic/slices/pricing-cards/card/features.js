import React from 'react'
import PropTypes from 'prop-types'
import { renderPrismic } from 'lib/renderPrismicRichText'
import shortid from 'shortid'


class PricingCardFeatures extends React.Component {

  render() {
    const {features} = this.context;

    const Features = features.map(feature => (<div key={ shortid.generate() } className="pricing__card__feature">
      <div className='pricing__card__feature__value'>
        { renderPrismic(feature.feature) }
      </div>
    </div>))

    return (
      <div className="pricing__card__features">
        <div className="pricing__card__features__wrapper">
          { Features }
        </div>
      </div>
    )
  }
}

PricingCardFeatures.contextTypes = {
  features: PropTypes.array.isRequired,
}

export default PricingCardFeatures


