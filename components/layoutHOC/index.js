import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from 'components/global/header'
import Footer from 'components/global/footer'
import styles from 'components/global/layout/layout.scss'
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

            <Child {...this.props} state={this.state} />
            <Footer />
          </div>
        </div>
      )
    }
  }
}

export default Layout
