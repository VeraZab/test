import React, { Component } from 'react';

import Layout from 'components/layoutHOC';
import Hero from 'components/prismic/hero';
import Slices from 'components/prismic/slices';
import Head from 'components/global/head';
import NotFound from 'components/404';
import Image from 'components/prismic/Image/index';
import PrismicDOM from 'prismic-dom';

const shortid = require('shortid');

class PrismicCustomerStoryGenerator extends Component {
  getDoc = () =>
    this.props.content &&
    this.props.content.customer_stories &&
    this.props.content.customer_stories.find(
      doc => doc.uid === this.props.slug && doc.type === 'customer-story',
    );

  constructor(props) {
    super(props);
  }

  static getInitialProps({ query }) {
    const { slug } = query;

    return {
      slug,
    };
  }

  render() {
    const doc = this.getDoc(this.props.content);

    if (doc === undefined) {
      return <NotFound />;
    } else {
      const meta = {
        title: `Plotly: ${doc.data.client}`,
        description: `${doc.data.overview}`,
      };

      const hero = <Hero key={shortid.generate()} data={doc.data} />;
      const slices = <Slices data={doc.data.body} />;
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
      );
    }
  }
}

export default Layout(PrismicCustomerStoryGenerator);
