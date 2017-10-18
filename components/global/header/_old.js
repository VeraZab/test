import React from 'react'
import styles from './header.scss'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navigation from './navigation'

Router.onRouteChangeStart = url => {
  // console.log(`Loading: ${url}`);
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

  componentDidMount() {}

  render() {
    let { doc } = this.props

    if (doc && doc.data.header_style === 'product-header') {
      return (
        <header
          id="main-nav"
          className={
            'header-main header-style--product ' +
            doc.data.hero_background_style
          }
        >
          <style dangerouslySetInnerHTML={{ __html: styles }} />
          <div className="header-message">
            <div className="header-message-wrapper">
              2 day master classes for Dash, R Shiny, and React/Plotly.js in NYC
              November 18-19 🎨 📈 🗽
              <a href="https://plotcon.plot.ly/workshops" target="_blank">
                Learn More
              </a>
            </div>
          </div>
          <div className="header-main-wrapper">
            <div className="header-main-left">
              <Link prefetch href="/">
                <a className="logo">
                  <div className="logo-wrapper">
                    {doc.data.alt_logo.url ? (
                      <img src={doc.data.alt_logo.url} alt={doc.data.title} />
                    ) : (
                      <img
                        src="https://prismic-io.s3.amazonaws.com/plotly%2Feb464d43-4ab4-427e-b617-482b62ba6c69_plotly-logo-white.png"
                        alt="Plotly"
                      />
                    )}
                  </div>
                </a>
              </Link>
            </div>
            <div className="header-main-right">
              <Navigation
                data={doc.data.header_navigation}
                pathname={this.props.pathname}
              />
            </div>
          </div>
        </header>
      )
    }
    return (
      <header id="main-nav" className={'header-main header-style--product'}>
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
        <div className="header-main-wrapper">
          <div className="header-main-left">
            <Link prefetch href="/">
              <a className="logo">
                <div className="logo-wrapper">
                  <img
                    src="https://prismic-io.s3.amazonaws.com/plotly%2Feb464d43-4ab4-427e-b617-482b62ba6c69_plotly-logo-white.png"
                    alt="Plotly"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="header-main-right">
            <Navigation pathname={this.props.pathname} />
          </div>
        </div>
      </header>
    )
  }
}
export default Header
