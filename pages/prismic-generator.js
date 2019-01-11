import React, {Component} from 'react';

import Layout from 'components/layoutHOC';
import Hero from 'components/prismic/hero';
import Slices from 'components/prismic/slices';
import Head from 'components/global/head';

import shortid from 'shortid';
import NotFound from 'components/404';

class PrismicGenerator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {doc} = this.props;

    if (doc === undefined) {
      return <NotFound />;
    }
    const meta = {
      title: `${doc.data.title}`,
      description: `${doc.data.description}`,
    };

    const hero = <Hero key={shortid.generate()} data={doc.data} />;
    // console.log(doc.data.slices);
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

export default Layout(PrismicGenerator);
