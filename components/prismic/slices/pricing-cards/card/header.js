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

    const {content, content: {pretitle, title, price}} = this.context;

    const Pretitle = pretitle &&
      <div className="pricing__card__header__pretitle"><h3 className="pre-title">{ pretitle }</h3></div>

    const Title = title &&
      <div className="pricing__card__header__title"><h2 className="title">{ title }</h2></div>

    const Price = price &&
      <div className="pricing__card__header__price"><h2
        className="title price"><span className="price__symbol">$</span>{ numberWithCommas(parseInt(price)) }</h2>
      </div>

    const buttons = constructButtons(content);

    const Buttons = <div className="pricing__card__header__actions buttons">{ buttons.map(button => <Button
      key={ shortid.generate() }
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


