import Head from 'next/head'

const globalMeta = {}
const defaultMeta = {
  type: 'article',
  sitename: 'Plotly',
  title: 'Visualize Data, Together',
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
}

export default ({ children, meta = defaultMeta }) => (
  <Head>
    <title>
      {meta.title
        ? meta.title
        : defaultMeta.title +
          ' • Make charts and dashboards online - ' +
          defaultMeta.sitename}
    </title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:site_name" content={globalMeta.sitename} />
    <meta
      property="og:type"
      content={meta.type ? meta.type : defaultMeta.type}
    />
    <meta
      property="og:title"
      content={
        meta.title
          ? meta.title
          : defaultMeta.title
      }
    />
    <meta
      property="og:description"
      content={meta.description ? meta.description : defaultMeta.description}
    />
    <meta property="og:url" content={meta.url ? meta.url : defaultMeta.url} />
    <meta
      property="og:image"
      content={meta.image ? meta.image : defaultMeta.image}
    />
    {/*<meta property="article:tag" content="Alec Radford" />*/}
    {/*<meta property="article:tag" content="Ilya Sutskever" />*/}
    {/*<meta property="article:tag" content="Rafal Jozefowicz" />*/}
    {/*<meta property="article:tag" content="Jack Clark" />*/}
    {/*<meta property="article:tag" content="Greg Brockman" />*/}

    <meta property="article:publisher" content={defaultMeta.publisher} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content={meta.title ? meta.title : defaultMeta.title}
    />
    <meta
      name="twitter:description"
      content={meta.description ? meta.description : defaultMeta.description}
    />
    <meta name="twitter:url" content={meta.url ? meta.url : defaultMeta.url} />
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
  </Head>
)
