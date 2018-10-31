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
          <script dangerouslySetInnerHTML={{__html:
            `(
              function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N6T2RXG');`}} />
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
