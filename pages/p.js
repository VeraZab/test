import React, { Component } from 'react'

import Layout from 'components/layoutHOC'
import Hero from 'components/prismic/hero'
import Slices from 'components/prismic/slices'
import Head from 'components/global/head'
import { fetchData } from 'lib/fetchData'
import { bindActionCreators } from 'redux'
import { initStore, saveStoreData } from 'store/global'
import withRedux from 'next-redux-wrapper'
import { transformData } from 'lib/transform-data.prismic'

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

      const content = await transformData(store.getState().data.appData, slug);
      currentDoc = store.getState().data.appData.find(doc => doc.uid === slug)

      store.dispatch(
        saveStoreData({
          appData: store.getState().data.appData,
          content,
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
      const content = await transformData(appData, slug);
      currentDoc = appData.find(doc => doc.uid === slug)
      store.dispatch(
        saveStoreData({
          appData: appData,
          content,
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
        title: `${doc.data.title}`,
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
  content: state.data ? state.data.content : {},
  doc: state.data ? state.data.content.current_page : {}

})

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(
  Layout(P)
)
