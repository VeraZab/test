import '@babel/polyfill';
import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from 'lib/withReduxStore';
import {Provider} from 'react-redux';
import {fetchData} from 'lib/fetchData';
import {saveStoreData} from 'store/global';
import {connect} from 'react-redux';
import getCookies from 'next-cookies';

function inlineLinkedItems(data) {
  const pages = data.filter(doc => doc.type === 'page');
  pages.forEach(page => {
    page.data.slices.forEach(slice => {
      slice.linked_items = slice.items.map(item => {
        const linked_items = {};
        for (let [key, value] of Object.entries(item)) {
          if (value.link_type && value.link_type == 'Document' && value.id) {
            linked_items[key] = data.find(d => d.id === value.id);
          }
          return linked_items;
        }
      });
    });
  });
  return {pages};
}

class MyApp extends App {
  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const {reduxStore, query = {slug: 'home'}} = ctx;
    const {slug = 'home'} = query;
    /**
     * Get all our data on the server
     * (or statically exported)
     */
    const state = reduxStore.getState();

    let currentDoc = {};

    if (state && state.loaded) {
      const content = inlineLinkedItems(reduxStore.getState().data.appData);
      currentDoc = content.pages.find(doc => doc.uid === slug);

      reduxStore.dispatch(
        saveStoreData({
          appData: reduxStore.getState().data.appData,
          content,
          currentDoc,
          req: false,
        })
      );

      return {
        slug: slug,
        req: true,
        pageProps,
      };
    } else {
      const appData = await fetchData(getCookies(ctx)['io.prismic.preview']);
      const content = inlineLinkedItems(appData);
      currentDoc = content.pages.find(doc => doc.uid === slug);
      reduxStore.dispatch(
        saveStoreData({
          appData: appData,
          content,
          currentDoc,
          req: true,
        })
      );
      return {
        slug: slug,
        req: false,
        pageProps,
      };
    }
  }

  render() {
    const {Component, pageProps, reduxStore} = this.props;

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
    content: state.data.content,
  });

  return connect(mapStateToProps)(Component);
};

export default withReduxStore(MyApp);
