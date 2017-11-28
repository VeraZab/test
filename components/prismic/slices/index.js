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
const shortid = require('shortid')

/**
 * Our slice options
 */

import ContentSection from 'components/prismic/content-section'
import LogosSlice from 'components/prismic/slices/logos'
import TabsSlice from './tabs'

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
              slice.slice_type === 'graphic_with_text_logos' ||
              slice.slice_type === 'graphic_with_text_slides' ||
              slice.slice_type === 'cs-advanced-cards' ||
              slice.slice_type === 'cs-iframe' ||
              slice.slice_type === 'cs-code-explorer' ||
              slice.slice_type === 'cs-github-stars'
            ) {
              return <ContentSection key={shortid.generate()} data={slice} />
            } else if (slice.slice_type === 'cs-tabs') {
              return <TabsSlice key={shortid.generate()} data={slice} />
            } else if (slice.slice_type === 'logos') {
              return <LogosSlice key={shortid.generate()} data={slice} />
            } else return
          })}
        </div>
      </div>
    )
  }
}


// slice.slice_type === 'cs-code-explorer' ||
