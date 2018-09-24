import Layout from 'components/global/layout'
import HeroSection from './hero'
import Main from './main'

const meta = {
  title: 'Plotly and Université de Sherbrooke to develop genomic visualization with innovation funding',
  description:
    '',
  url: 'https://plot.ly/newsroom/mitacs',
}

export default () => (
  <Layout meta={meta}>
    <HeroSection data={meta} />
    <Main />
  </Layout>
)
