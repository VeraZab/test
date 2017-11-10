import React from 'react'
import Layout from 'components/global/layout'

import Hero from './sections/hero-home/hero-home'
import HomeTabs from './sections/tabs-home/tabs-home'
import DataNarrative from './sections/narrative/narrative'
import ImportData from './sections/import/import'
import CreateGraphsAndCharts from './sections/create-graphs-charts/create-graphs-charts'
import CreatePresentationsDashboards from './sections/create-presentations-dashboards/create-presentations-dashboards'
import TrackData from './sections/track-data/track-data'
import BusinessIntelligence from './sections/business-intelligence/business-intelligence'
import OutstandingApi from './sections/api/api'
import ClientSuccess from './sections/client-success/client-success'

const meta = {
  title: 'Visualize Data, Together',
  description:
    'Plotly is the modern platform for agile business intelligence and data science.',
}

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.pageContent) {
    }

    return (
      <Layout meta={meta}>
        <Hero />
        <HomeTabs />
        <DataNarrative />
        <ImportData />
        <CreateGraphsAndCharts />
        <CreatePresentationsDashboards />
        <TrackData />
        <BusinessIntelligence />
        <OutstandingApi />
        <ClientSuccess />
      </Layout>
    )
  }
}
