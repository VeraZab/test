import React from 'react'
import Image from 'components/prismic/Image'

import PrismicDOM from 'prismic-dom'
/**
 * Logos Slice component
 * for displaying a row of logos
 *
 * You can display a title
 * and a some content for the body
 *
 * Logos can have:
 * a label
 * a link
 * @class
 *
 */
export default class LogosSlice extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    let { data } = this.props
    let classes = 'logos-slice'

    if (this.props.className) {
      classes += ' ' + this.props.className
    }

    /**
         * Layout
         * This will default to the value of 'column'
         * These values will adjust the layout of the hero overall
         * column || row
         */
    if (data.primary.alignment !== null || data.primary.alignment !== '') {
      classes += ' logos-slice-align--' + data.primary.alignment
    }
    return (
      <div className={classes}>
        <div className="logos-slice-wrapper">
          {data.primary.title.length || data.primary.body.length ? (
            <div className="logos-slice-header">
              <div
                className="logos-slice-title"
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(data.primary.title),
                }}
              />
            </div>
          ) : null}
          <div className="logos">
            {data.items.map((logo, i) => {
              return (
                <div className="logos-slice-logo" key={i}>
                  <Image data={logo.image} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
