import React, { Component } from 'react'

import { fetchData } from 'lib/fetchData'

import Layout from 'components/layoutHOC'
import Hero from 'components/prismic/hero'
import Slices from 'components/prismic/slices'

class PlotlyJS extends Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    const data = await fetchData()
    const doc = await data.find(doc => doc.uid === 'plotly-js')
    return {
      doc: doc,
    }
  }

  render() {
    const hero = <Hero data={this.props.doc.data} />
    const slices = <Slices data={this.props.doc.data.slices} />

    return (
      <div className={'page' + ' page--' + this.props.doc.uid}>
        {hero}
        {slices}
      </div>
    )
  }
}

export default Layout(PlotlyJS)
