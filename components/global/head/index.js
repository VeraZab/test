import Head from 'next/head';

const globalMeta = {};
const defaultMeta = {
  type: 'article',
  sitename: 'Plotly',
  title: 'Visualize Data, Together',
  description: 'Plotly is the modern platform for agile business intelligence and data science.',
  url: 'https://plot.ly',
  image: 'https://brand.plot.ly/static/images/plotly-logo-01-stripe@2x.png',
  tags: [],
  publisher: 'https://www.facebook.com/Plotly/',
  twitter: {
    label1: '',
    data1: '',
    label2: '',
    data2: '',
    site: '@plotlygraphs',
  },
};

export default ({meta = defaultMeta}) => {
  const title = meta.title ? meta.title : defaultMeta.title;
  const OgTitle = title;

  const siteTitle = `${title} - Plotly`;

  const Description = meta.description ? meta.description : defaultMeta.description;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:site_name" content={globalMeta.sitename} />
      <meta property="og:type" content={defaultMeta.type} />
      <meta property="og:title" content={OgTitle} />
      <meta property="og:description" content={Description} />
      <meta property="description" content={Description} />
      <meta property="og:url" content={meta.url ? meta.url : defaultMeta.url} />
      <meta property="og:image" content={meta.image ? meta.image : defaultMeta.image} />
      <meta property="article:publisher" content={defaultMeta.publisher} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={OgTitle} />
      <meta name="twitter:description" content={Description} />
      <meta name="twitter:url" content={meta.url ? meta.url : defaultMeta.url} />
      <meta name="twitter:image" content={meta.image ? meta.image : defaultMeta.image} />

      {meta.twitter && meta.twitter.label1 ? (
        <meta name="twitter:label1" content={meta.twitter.label1} />
      ) : null}
      {meta.twitter && meta.twitter.data1 ? (
        <meta name="twitter:data1" content={meta.twitter.data1} />
      ) : null}
      {meta.twitter && meta.twitter.label2 ? (
        <meta name="twitter:label2" content={meta.twitter.label2} />
      ) : null}
      {meta.twitter && meta.twitter.data2 ? (
        <meta name="twitter:data2" content={meta.twitter.data2} />
      ) : null}

      <meta name="twitter:site" content={defaultMeta.twitter.site} />
      <link href="https://plot.ly/favicon.ico?v=2" rel="shortcut icon" />
    </Head>
  );
};
