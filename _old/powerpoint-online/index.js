import Layout from 'components/global/layout'
import HeroSection from './hero'
import Main from './main'

const meta = {
  title: 'Powerpoint Online',
  description:
    'Create and share Powerpoint-like slide decks online that have interactive Plotly charts.',
  url: 'https://plot.ly/powerpoint-online/',
}

export default () => (
  <Layout meta={meta}>
    <HeroSection />
    <Main />
  </Layout>
)
