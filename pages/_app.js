import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from 'lib/withReduxStore';
import { Provider } from 'react-redux';
import { fetchData } from 'lib/fetchData';
import {
  saveStoreData,
  fetchSubscriptionData,
  fetchSubscriptionDataFinished,
  fetchSubscriptionDataError,
} from 'store/global';
import { transformData } from 'lib/transform-data.prismic';
import { connect } from 'react-redux';
class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const { reduxStore, query = { slug: 'home' } } = ctx;
    const { slug = 'home' } = query;
    /**
     * Get all our data on the server
     * (or statically exported)
     */
    const state = reduxStore.getState();

    let currentDoc = {};

    if (
      state.subscriptions &&
      !state.subscriptions.error &&
      !state.subscriptions.fetching
    ) {
      reduxStore.dispatch(fetchSubscriptionData());
      await fetch('https://api.plot.ly/v2/subscriptions')
        .then(res => res.json())
        .then(data => reduxStore.dispatch(fetchSubscriptionDataFinished(data)))
        .catch(error => reduxStore.dispatch(fetchSubscriptionDataError(error)));
    }

    if (state && state.loaded) {
      const content = await transformData(
        reduxStore.getState().data.appData,
        slug,
      );
      currentDoc = reduxStore
        .getState()
        .data.appData.find(doc => doc.uid === slug);

      reduxStore.dispatch(
        saveStoreData({
          appData: reduxStore.getState().data.appData,
          content,
          currentDoc,
          req: false,
        }),
      );

      return {
        slug: slug,
        req: true,
      };
    } else {
      const appData = await fetchData();
      const content = await transformData(appData, slug);
      currentDoc = appData.find(doc => doc.uid === slug);
      reduxStore.dispatch(
        saveStoreData({
          appData: appData,
          content,
          currentDoc,
          req: true,
        }),
      );
      return {
        slug: slug,
        req: false,
      };
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    const PageComponent = ConnectedComponent(Component);
    return (
      <Container>
        <Provider store={reduxStore}>
          <PageComponent {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

const ConnectedComponent = Component => {
  const mapStateToProps = state => ({
    doc: state.data.currentDoc,
  });

  return connect(mapStateToProps)(Component);
};

export default withReduxStore(MyApp);
