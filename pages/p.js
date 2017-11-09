import React, { Component } from 'react'


import Layout from 'components/layoutHOC'
import Hero from 'components/prismic/hero'
import Slices from 'components/prismic/slices'
import Head from 'components/global/head'
import { fetchData } from 'lib/fetchData'
import { bindActionCreators } from 'redux'
import { initStore, saveStoreData } from 'store/global'
import withRedux from 'next-redux-wrapper'

const shortid = require('shortid');
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

    if (currentStore.loaded === false) {
      const appData = await fetchData()
      /**
       * Save data to redux store
       */
      store.dispatch(
        saveStoreData({
          appData: appData,
          req: true,
        })
      )
    }


    /**
     * Let's return some helpers for figuring out where we are
     * req means we're on the server vs client
     */
    return {
      slug: slug,
      req: true,
    }
  }

  getDoc = data => data.find(doc => doc.uid === this.props.slug)

  render() {

    const doc = this.getDoc(this.props.reduxData)

    if (doc === undefined) {
      return <NotFound/>
    } else {

      const meta = {
        title: `Plotly: ${doc.data.title}`,
        description: `${doc.data.description}`
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
  reduxData: state.data ? state.data.appData : []
})

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(
  Layout(P)
)
