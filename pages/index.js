import React from 'react'

import { fetchData } from 'lib/fetchData'
import { bindActionCreators } from 'redux'
import { initStore, saveStoreData } from 'store/global'
import withRedux from 'next-redux-wrapper'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({ store, req, query: { slug } }) {
    /**
     * Get all our data on the server
     * (or statically exported)
     */
    if (req) {
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
      /**
       * Let's return some helpers for figuring out where we are
       * req means we're on the server vs client
       */
      return {
        slug: slug,
        req: true,
      }
    } else {
      return {
        slug: slug,
        req: false,
      }
    }
  }

  render() {
    return <div />
  }
}
export default Index
