import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          {/* Google Tag Manager Tags */ }
          <script async
            src="https://www.googletagmanager.com/gtag/js?id=AW-1009791370"
          />
          <script dangerouslySetInnerHTML={
            {__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1009791370');`}}
          />
          <script dangerouslySetInnerHTML={
            {__html: `window.prismic = {endpoint: 'https://plotly.prismic.io/api/v2'};`}}
          />
          <script async type="text/javascript"
              src="//static.cdn.prismic.io/prismic.min.js"/>
        </Head>
        <body>
        {/* Google Tag Manager Tags */ }
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6T2RXG"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>`}} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
