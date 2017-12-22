import React from 'react'
import PropTypes from 'prop-types'
import AdvancedCard from './card/index'

const shortid = require('shortid')


/**
 * Tabs slice
 *
 */
class AdvancedCards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data, variant} = this.props;


    const Cards = data.map((card) => <AdvancedCard variant={ variant } key={ shortid.generate() }
                                                              card={ card }/>)
    return (
      <div className="advanced-cards">
        <div className="advanced-cards__wrapper">{ Cards }</div>
      </div>
    )
  }
}

AdvancedCards.propTypes = {
  data: PropTypes.array.isRequired,
  variant: PropTypes.string
}


export default AdvancedCards
