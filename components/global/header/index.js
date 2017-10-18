import React from 'react'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navigation from './navigation'

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => NProgress.done()

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { doc } = this.props

    let classes = 'site-header site-header-style--product'

    let logo = (
      <img
        src="https://prismic-io.s3.amazonaws.com/plotly%2Feb464d43-4ab4-427e-b617-482b62ba6c69_plotly-logo-white.png"
        alt="Plotly"
      />
    )

    if (doc) {
      classes += ' ' + doc.data.hero_background_style
      if (doc.data.alt_logo.url) {
        logo = <img src={doc.data.alt_logo.url} alt={doc.data.title} />
      }
    }

    return [
      <div className="global-message">
        <div className="global-message-wrapper">
          2 day master classes for Dash, R Shiny, and React/Plotly.js in NYC
          November 18-19 🎨 📈 🗽{' '}
          <a href="https://plotcon.plot.ly/workshops" target="_blank">
            Learn More
          </a>
        </div>
      </div>,
      <header className={classes}>
        <div className="site-header-wrapper">
          <div className="site-header--section-left">
            <div className="site-header-logo">
              <Link prefetch href="/">
                <a>{logo}</a>
              </Link>
            </div>
          </div>
          <div className="site-header--section-right">
            <Navigation pathname={this.props.pathname} />
          </div>
        </div>
      </header>,
    ]
  }
}
export default Header
