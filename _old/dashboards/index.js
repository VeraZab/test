import Layout from 'components/global/layout'
import Hero from './hero'
import Main from './main'

const meta = {
  title: 'Online Dashboards',
  descrtiption: 'Create branded, online dashboards with D3.js Plotly charts.',
  url: 'https://plot.ly/dashboards/',
}

export default () => (
  <Layout meta={meta}>
    <Hero />
    <Main />
  </Layout>
)
