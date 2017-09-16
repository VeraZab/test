import React from 'react';
import 'isomorphic-fetch'
import Layout from 'components/global/layout';
import {ContentSection, Body} from 'components/content-section';
import IndustriesHero from './single-industries/hero';
import IndustriesMain from './single-industries/main';
import IndustriesRequestDemo from './single-industries/request-demo';
import styles from './single-industries/single-industries.styles.scss'

export default class extends React.Component {

  static async getInitialProps ({ query: { id } }) {
      const urlPath = `https://plotly.github.io/plotly-next/static/data/products/industries/${id}.json`
      const res = await fetch(urlPath)
      const data = await res.json()
      return { data }
  }


  render () {
    const data = this.props.data;
    return (
      <Layout meta={data.header.title}>
        <style dangerouslySetInnerHTML={{__html: styles}}/>
        <IndustriesHero header={data.header} style={data.style} />
        <IndustriesMain mainData={data} />
        <IndustriesRequestDemo />
      </Layout>
    )
  }
}
