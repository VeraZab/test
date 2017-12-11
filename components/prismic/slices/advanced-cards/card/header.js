import React from 'react'
import PropTypes from 'prop-types'


class Header extends React.Component {

  render() {
    const {title, subtitle} = this.context;
    const Fragment = React.Fragment
    return (
      <Fragment>
        <div className="card__title">
          <h2>
            <span>
              { title }
            </span>
          </h2>
        </div>
        <div className="card__subtitle">
          <h3>{ subtitle }</h3>
        </div>
      </Fragment>
    )
  }
}

Header.contextTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Header


