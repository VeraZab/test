import Layout from 'components/global/layout'
import HeroSection from './hero'
import Main from './main'

const meta = {
  title: 'Plotly Newsroom',
  description:
    '',
  url: 'https://plot.ly/newsroom/',
}

export default () => (
  <Layout meta={meta}>
    <HeroSection data={meta} />
    <Main />
  </Layout>
)
