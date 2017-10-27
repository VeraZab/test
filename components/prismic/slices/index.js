/**
 * Slices component
 *
 * This is our component that will parse through an array of
 * slices and render the corresponding slice if it is accounted for.
 *
 * @class
 *
 */

import React from 'react'

/**
 * Our slice options
 */

import ContentSection from 'components/prismic/content-section'
import LogosSlice from 'components/prismic/slices/logos'

export default class Slices extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    let { data } = this.props
    return (
      <div className="slices">
        <div className="slices-wrapper">
          {data.map((slice, i) => {
            if (
              slice.slice_type === 'graphic_with_text' ||
              slice.slice_type === 'graphic_with_text_logos'
            ) {
              return <ContentSection key={i} data={slice} />
            } else if (slice.slice_type === 'graphic_with_text_slides') {
              return <ContentSection key={i} data={slice} />
            } else if (slice.slice_type === 'logos') {
              return <LogosSlice key={i} data={slice} />
            } else return
          })}
        </div>
      </div>
    )
  }
}
