import React from 'react'
import Head from 'next/head'
import Header from 'components/global/header'
import Footer from 'components/global/footer'
import styles from 'components/global/layout/layout.scss'
import ReactGA from 'react-ga'
import Metahead from 'components/global/head'

function Layout(Child) {
  return class Layout extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        projects: [],
        appData: [],
        loaded: true,
      }
    }

    static getInitialProps(context) {
      return Child.getInitialProps(context)
    }

    componentWillMount() {
      if (this.props.doc) {
        this.setState({
          doc: this.props.doc,
        })
      }
    }

    componentDidMount() {
      document.body.classList.remove('no-scroll')


      ReactGA.initialize('UA-39373211-1')
      ReactGA.pageview(document.location.pathname)
      ;(function() {
        let qs,
          js,
          q,
          s,
          d = document,
          gi = d.getElementById,
          ce = d.createElement,
          gt = d.getElementsByTagName,
          id = 'typef_orm_share',
          b = 'https://embed.typeform.com/'
        if (!gi.call(d, id)) {
          js = ce.call(d, 'script')
          js.id = id
          js.src = b + 'embed.js'
          q = gt.call(d, 'script')[0]
          q.parentNode.insertBefore(js, q)
        }
      })()


      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => {
            console.log('service worker registration successful')
          })
          .catch(err => {
            console.warn('service worker registration failed', err.message)
          })
      }
    }

    render() {
      let classes = ''
      let layout_styles = {}

      return (
        <div className={'page-layout ' + classes} style={layout_styles}>
          <div className="page-layout-wrapper">
            <Metahead />
            <Head>
              <style dangerouslySetInnerHTML={{ __html: styles }} />
            </Head>
            <Header {...this.props} />
            <Child {...this.props} />
            <Footer />
          </div>
        </div>
      )
    }
  }
}

export default Layout
