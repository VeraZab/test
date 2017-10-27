import React from 'react'

import { fetchData } from 'lib/fetchData'

import Layout from 'components/layoutHOC'
import Hero from 'components/prismic/hero'
import Slices from 'components/prismic/slices'

class P extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({ query: { slug } }) {
    const data = await fetchData()
    const doc = await data.find(doc => doc.uid === slug)
    return {
      doc: doc,
    }
  }

  render() {
    const hero = <Hero data={this.props.doc.data} />
    const slices = <Slices data={this.props.doc.data.slices} />

    return (
      <div className="page">
        {hero}
        {slices}
      </div>
    )
  }
}

export default Layout(P)
