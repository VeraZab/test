import React from 'react'
import PropTypes from 'prop-types'
import PrismicDOM from 'prismic-dom'

const shortid = require('shortid')


class PricingCardFeatures extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    const {features} = this.context;

    const Features = features.map(feature => <div className="pricing__card__feature">
      <div key={ shortid.generate() } className={ 'pricing__card__feature__value' }
           dangerouslySetInnerHTML={ {
             __html: PrismicDOM.RichText.asHtml(feature.feature),
           } }/>

    </div>)

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


