import React from 'react'
import PropTypes from 'prop-types'

const shortid = require('shortid')


class PricingCardFeatures extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {features} = this.context;

    const Features = features.map(feature => <div key={ shortid.generate() }>Feature</div>)

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


