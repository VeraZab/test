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

class P extends Component {
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

      currentDoc = store.getState().data.appData.find(doc => doc.uid === slug)
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
      currentDoc = appData.find(doc => doc.uid === slug)
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
    data.find(doc => doc.uid === this.props.slug && doc.type === 'page')

  render() {
    const {doc} = this.props

    if (doc === undefined) {
      return <NotFound/>
    } else {
      const meta = {
        title: `Plotly: ${doc.data.title}`,
        description: `${doc.data.description}`,
      }

      const hero = <Hero key={ shortid.generate() } data={ doc.data }/>
      const slices = <Slices data={ doc.data.slices }/>
      return (
        <div className={ 'page' + ` page--${doc.uid}` }>
          <Head meta={ meta }/>
          { hero }
          { slices }
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
  Layout(P)
)
