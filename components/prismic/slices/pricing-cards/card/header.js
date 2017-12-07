import React from 'react'
import PropTypes from 'prop-types'
import { constructButtons } from 'lib/construct-buttons'
import { numberWithCommas } from 'lib/format-currency'
import Button from 'components/prismic/button'

const shortid = require('shortid')


class PricingCardHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {

    const {content} = this.context;

    const Pretitle = content.pretitle &&
      <div className="pricing__card__header__pretitle"><h3 className="pre-title">{ content.preitle }</h3></div>

    const Title = content.title &&
      <div className="pricing__card__header__title"><h2 className="title">{ content.title }</h2></div>

    const Price = content.price &&
      <div className="pricing__card__header__price"><h2
        className="title price"><span className="price__symbol">$</span>{ numberWithCommas(parseInt(content.price)) }</h2>
      </div>

    const buttons = constructButtons(content);

    const Buttons = <div className="pricing__card__header__actions buttons">{ buttons.map(button => <Button key={ shortid.generate() }
                                                                             data={ button }/>) }</div>


    return (
      <div className="pricing__card__header">
        <div className="pricing__card__header__wrapper">
          { Pretitle }
          { Title }
          { Price }
          { Buttons }
        </div>
      </div>
    )
  }
}

PricingCardHeader.contextTypes = {
  content: PropTypes.object.isRequired,
}

export default PricingCardHeader


