import React from 'react'
import Logo from './logo'
import Actions from './actions'
import PropTypes from 'prop-types'
import Header from './header'

import Body from './body'

const shortid = require('shortid')

class AdvancedCard extends React.Component {
  constructor(props) {
    super(props)
  }

  getChildContext() {
    const {card, card: {title, subtitle, logo, body}} = this.props
    return {
      card,
      title,
      subtitle,
      logo,
      body
    }
  }

  render() {
    const {variant, card: {display}} = this.props
    if (display === 'true') {
      if (variant === 'basic') {
        return (
          <div className="card">
            <div className="card__wrapper">
              <div className="card__section">
                <Header/>
                <Logo/>
              </div>
              <div className="card__section">
                <Body actions={ <Actions/> }/>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="card card--with-blur">
            <div className="card__wrapper">
              <div className="card__image">
                <div className="card__details">
                  <div className="card__details__meta">
                    <Header/>
                  </div>
                  <Logo/>
                </div>
              </div>
              <Body actions={ <Actions/> }/>
            </div>
          </div>
        )
      }
    } else {
      return null
    }
  }
}

AdvancedCard.propTypes = {
  card: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired
}
AdvancedCard.childContextTypes = {
  card: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logo: PropTypes.object,
  body: PropTypes.object
}


export default AdvancedCard
