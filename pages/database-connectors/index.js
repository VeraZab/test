import React from 'react'
import Layout from 'components/layoutHOC'
import HeroSection from './hero'
import Main from './main'

import { fetchData } from 'lib/fetchData'

const meta = {
  title: 'Database Connectors',
  description:
    'Connect Plotly charts and dashboards to your SQL and Redshift databases',
  url: 'https://plot.ly/database-connectors/',
}

class DatabaseConnectors extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps() {
    const data = await fetchData()
    const doc = await data.find(doc => doc.uid === 'database-connectors')
    return {
      doc: doc,
      data: data,
      meta: meta,
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div className="page">
        <HeroSection doc={this.props.doc} />
        <Main doc={this.props.doc} />
      </div>
    )
  }
}

export default Layout(DatabaseConnectors)
