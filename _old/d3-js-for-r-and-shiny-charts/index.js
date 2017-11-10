import Layout from 'components/global/layout'
import Hero from './hero'
import Main from './main'

const meta = {
  title: 'D3.js for R and Shiny Charts',
  desc:
    'The world’s most ambitious companies in engineering, CPG, finance, and energy are using Plotly.js for their dashboards, online products, and internal tools.',
  url: 'https://plot.ly/d3-js-for-r-and-shiny-charts/',
}

export default () => (
  <Layout meta={meta}>
    <Hero />
    <Main />
  </Layout>
)
