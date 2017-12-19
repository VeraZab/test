import React from 'react'
import PropTypes from 'prop-types'
import { constructButtons } from 'lib/construct-buttons'
import shortid from 'shortid'
import Button from 'components/prismic/button/index'


class Actions extends React.Component {
  render() {
    const {card} = this.context;

    const buttons = constructButtons(card);

    if (!buttons.length) {
      return null
    }
    return (
      <div className="card__body__actions buttons">
        { buttons.map((button) => {
          return <Button key={ shortid.generate() } data={ button }/>
        }) }
      </div>
    )
  }
}

Actions.contextTypes = {
  card: PropTypes.object.isRequired
}

export default Actions



