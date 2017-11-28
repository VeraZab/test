import React from 'react'

const shortid = require('shortid')

/**
 * Iframes sub slice
 *
 */
export default class Iframes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const iframes = this.props.data.map((iframe) => {

      let minHeight = '600px'
      const style = {
        minHeight: iframe.min_height ? iframe.min_height : minHeight
      }
      return (
        <div className="iframe-embed__iframe" key={ shortid.generate() }>
          <iframe src={ iframe.iframe_url } frameBorder="0" style={ style }/>
        </div>
      )
    })
    return (
      <div className="iframe-embed">
        <div className="iframe-embed__wrapper">{ iframes }</div>
      </div>
    )
  }
}
