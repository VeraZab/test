import Head from 'next/head';

const globalMeta = {};
const defaultMeta = {
  type: 'article',
  sitename: 'Plotly',
  title: 'Modern Analytics Apps For The Enterprise',
  description:
    'Plotly is the modern platform for agile business intelligence and data science.',
  url: 'https://plot.ly',
  image: 'https://now.plot.ly/static/images/meta/social-plotly.png',
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

export default ({ children, meta = defaultMeta }) => {

  const title = meta.title ? meta.title : defaultMeta.title
  const OgTitle = title;

  const siteTitle = `${title} - Plotly`

  const Description = meta.description
    ? meta.description
    : defaultMeta.description;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:site_name" content={globalMeta.sitename} />
      <meta property="og:type" content={defaultMeta.type} />
      <meta property="og:title" content={OgTitle} />
      <meta property="og:description" content={Description} />
      <meta property="og:url" content={meta.url ? meta.url : defaultMeta.url} />
      <meta
        property="og:image"
        content={meta.image ? meta.image : defaultMeta.image}
      />
      <meta property="article:publisher" content={defaultMeta.publisher} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={OgTitle} />
      <meta name="twitter:description" content={Description} />
      <meta
        name="twitter:url"
        content={meta.url ? meta.url : defaultMeta.url}
      />
      <meta
        name="twitter:image"
        content={meta.image ? meta.image : defaultMeta.image}
      />

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
      <script async
            src="https://www.googletagmanager.com/gtag/js?id=AW-1009791370"
          />
          <script dangerouslySetInnerHTML={
            {__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1009791370');`}}
          />
          <script dangerouslySetInnerHTML={{__html:
            `(
              function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N6T2RXG');`}} />
    </Head>
  );
};
