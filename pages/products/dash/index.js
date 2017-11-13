import Layout from 'components/global/layout'
import HeroSection from './hero'
import DashMain from './main'
import styles from './dash.styles.scss'

const meta = {
  title: 'Dash by Plotly',
  description:
    'Dash is a Python framework for building analytical web applications. No JavaScript required.',
  url: 'https://plot.ly/products/dash/',
  image:
    'https://images-plotly.imgix.net/static/marketing/meta/dash-og@2x.png?auto=compress&auto=format',
}

export default () => (
  <Layout meta={meta} hideHeader="true">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <div className="header-message">
      <div className="header-message-wrapper">
        2 day master classes for Dash, R Shiny, and React/Plotly.js in NYC
        November 18-19 🎨 📈 🗽{' '}
        <a href="https://plotcon.plot.ly/workshops" target="_blank">
          Learn More
        </a>
      </div>
    </div>
    <HeroSection />
    <DashMain />
  </Layout>
)
