import React from 'react'
import Image from 'components/prismic/Image/index'
import PropTypes from 'prop-types'


class Logo extends React.Component {
  render() {
    const {logo} = this.context;
    if (!logo.url) {
      return null
    }
    return (
      <div className="logo">
        <Image noBlur data={ logo }/>
      </div>
    )
  }
}

Logo.contextTypes = {
  logo: PropTypes.object
}

export default Logo


