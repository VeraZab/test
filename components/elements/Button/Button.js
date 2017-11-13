import React from 'react'
import styles from './Button.scss'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div className={'button ' + this.props.className}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="button-wrapper">
          <div className="button-label">{this.props.label}</div>
        </div>
      </div>
    )
  }
}
