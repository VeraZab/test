import Head from '../head';
import Header from '../header';
import Footer from '../footer';
import styles from '/styles/partials/layout.scss';
import React from 'react';
import ReactGA from 'react-ga';

const Layout = props => {
  let header = {};
  let footer = {};

  if (props && props.nav && props.nav.data) {
    header = props.nav.data.body[0];
    footer = props.nav.data.body[1];
  }

  return (
    <div className="page-container">
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <Head meta={props.meta} />
      <Header nav={header} prismicLogo={props.logo} nextLogo={props.meta.image} />
      <div className="page">{props.children}</div>
      <Footer nav={footer} />
    </div>
  );
};

Layout.componentDidMount = () => {
  document.body.classList.remove('no-scroll');
  ReactGA.initialize('UA-39373211-1');
  ReactGA.pageview(document.location.pathname);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('service worker registration successful' + registration);
      })
      .catch(err => {
        console.warn('service worker registration failed', err.message);
      });
  }
};

export default Layout;
