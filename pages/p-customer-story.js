import React, { Component } from 'react'

import Layout from 'components/layoutHOC'
import Hero from 'components/prismic/hero'
import Slices from 'components/prismic/slices'
import Head from 'components/global/head'
import { fetchData } from 'lib/fetchData'
import { bindActionCreators } from 'redux'
import { initStore, saveStoreData } from 'store/global'
import withRedux from 'next-redux-wrapper'

const shortid = require('shortid')
import NotFound from 'components/404'
import Image from 'components/prismic/Image/index'
import PrismicDOM from 'prismic-dom'

class PCS extends Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({store, req, query: {slug}}) {
    /**
     * Get all our data on the server
     * (or statically exported)
     */
    const currentStore = store.getState()

    let currentDoc = {}

    if (currentStore && currentStore.loaded) {

      currentDoc = store.getState().data.appData.find(doc => doc.uid === slug && doc.type === 'customer-story')
      store.dispatch(
        saveStoreData({
          appData: store.getState().data.appData,
          currentDoc,
          req: false,
        })
      )

      return {
        slug: slug,
        req: true,
      }

    } else {
      const appData = await fetchData()
      currentDoc = appData.find(doc => doc.uid === slug && doc.type === 'customer-story')
      store.dispatch(
        saveStoreData({
          appData: appData,
          currentDoc,
          req: true,
        })
      )
      return {
        slug: slug,
        req: false,
      }

    }
  }

  getDoc = data =>
    data.find(
      doc => doc.uid === this.props.slug && doc.type === 'customer-story'
    )

  render() {
    const doc = this.getDoc(this.props.reduxData)

    if (doc === undefined) {
      return <NotFound />
    } else {
      const meta = {
        title: `Plotly: ${doc.data.client}`,
        description: `${doc.data.overview}`,
      }

      const hero = <Hero key={shortid.generate()} data={doc.data} />
      const slices = <Slices data={doc.data.body} />
      return (
        <div className={`page page--${doc.uid} page--cs`}>
          <Head meta={meta} />

          <div className="page--cs__wrapper">
            <div className="page--cs__sidebar">
              <div className="page--cs__sidebar__wrapper">
                <div className="page--cs__sidebar__logo">
                  <Image noBlur data={doc.data.client_logo} />
                </div>
                <div className="page--cs__sidebar__title">
                  <h1>{doc.data.client}</h1>
                </div>
                <div
                  className="page--cs__sidebar__overview"
                  dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(doc.data.overview),
                  }}
                />
                <div
                  className="page--cs__sidebar__quote"
                  dangerouslySetInnerHTML={{
                    __html: PrismicDOM.RichText.asHtml(doc.data.quote),
                  }}
                />
              </div>
            </div>

            <div className="page--cs__main">{slices}</div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  saveStoreData: bindActionCreators(saveStoreData, dispatch),
})

const mapStateToProps = state => ({
  reduxData: state.data ? state.data.appData : [],
  doc: state.data ? state.data.currentDoc : [],
})


export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(
  Layout(PCS)
)
