import React from 'react';
import axios from 'axios';
import 'isomorphic-fetch'
import Layout from '../components/global/layout/layout';
import {ContentSection, Body} from '../components/content-section/content-section';
import IndustriesHero from './single-customer-stories/hero';
import IndustriesMain from './single-customer-stories/main';
import IndustriesRequestDemo from './single-customer-stories/request-demo';
import styles from './single-customer-stories/single-customer-stories.styles.scss'

export default class extends React.Component {

  static async getInitialProps ({ query: { id } }) {
      const urlPath = `http://localhost:3000/static/data/products/enterprise/${id}.json`;
      const res = await fetch(urlPath);
      const data = await res.json();
      return { data }
  }

  render () {
    const data = this.props.data;
    return (
      <Layout meta={data.header.title}>
        <style dangerouslySetInnerHTML={{__html: styles}}/>
        <IndustriesHero header={data.header} />
        <IndustriesMain mainData={data} />
        <IndustriesRequestDemo />
      </Layout>
    )
  }
}
