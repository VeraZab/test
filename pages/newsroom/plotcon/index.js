import Layout from 'components/global/layout'
import HeroSection from './hero'
import Main from './main'

const meta = {
  title: 'Plotly Announces 2ND Annual Data Visualization Conference PLOTCON 2017',
  description:
    '',
  url: 'https://plot.ly/newsroom/plotcon2017',
}

export default () => (
  <Layout meta={meta}>
    <HeroSection data={meta} />
    <Main />
  </Layout>
)
