import React, { Component } from 'react';

import Layout from 'components/layoutHOC';
import Hero from 'components/prismic/hero';
import Slices from 'components/prismic/slices';
import Head from 'components/global/head';

const shortid = require('shortid');
import NotFound from 'components/404';

class P extends Component {
  constructor(props) {
    super(props);
  }

  getDoc = data =>
    data.find(doc => doc.uid === this.props.slug && doc.type === 'page');

  render() {
    const { doc } = this.props;

    if (doc === undefined) {
      return <NotFound />;
    } else {
      const meta = {
        title: `${doc.data.title}`,
        description: `${doc.data.description}`,
      };

      const hero = <Hero key={shortid.generate()} data={doc.data} />;
      const slices = <Slices data={doc.data.slices} />;
      return (
        <div className={'page' + ` page--${doc.uid}`}>
          <Head meta={meta} />
          {hero}
          {slices}
        </div>
      );
    }
  }
}


export default Layout(P);
