import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section'
import React from 'react'
import Link from 'next/link'
import PrismicDOM from 'prismic-dom'

import Slices from 'components/prismic/slices'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    let { slices } = this.props.doc.data
    return <Slices data={slices} />
  }
}
