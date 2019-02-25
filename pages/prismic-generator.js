import React from 'react';

import Layout from 'components/global/layout';
import Hero from 'components/prismic/hero';
import Slices from 'components/prismic/slices';
import Head from 'components/global/head';

import shortid from 'shortid';
import NotFound from 'components/404';

import getCookies from 'next-cookies';
import {fetchData} from 'lib/fetchData';

function inlineLinkedItems(data) {
  const pages = data.filter(doc => doc.type === 'page');
  pages.forEach(page => {
    page.data.slices.forEach(slice => {
      slice.linked_items = slice.items.map(item => {
        const linked_items = {};
        for (const [key, value] of Object.entries(item)) {
          if (value && value.link_type && value.link_type === 'Document' && value.id) {
            linked_items[key] = data.find(d => d.id === value.id);
          }
          return linked_items;
        }
      });
    });
  });
  return {pages};
}

const PrismicGenerator = props => {
  const {doc} = props;

  if (!doc) {
    return <NotFound />;
  }

  const meta = {
    title: `${doc.data.title}`,
    description: `${doc.data.description}`,
  };

  return (
    <Layout meta={meta} pathname={props.pathname} document={doc}>
      <div className={`page page--${doc.uid}`}>
        <Head meta={meta} />
        <Hero key={shortid.generate()} data={doc.data} />
        <Slices data={doc.data.slices} />
      </div>
    </Layout>
  );
};

PrismicGenerator.getInitialProps = async context => {
  const slug = context && context.query && context.query.slug ? context.query.slug : 'home';
  const response = await fetchData(getCookies(context)['io.prismic.preview']);
  const content = inlineLinkedItems(response);
  const currentDoc = content.pages.find(doc => doc.uid === slug);

  return {
    doc: currentDoc,
    content,
  };
};

export default PrismicGenerator;
