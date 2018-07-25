import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
const dev = process.env.NODE_ENV !== 'production';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          {/* Google Tag Manager Tags */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(
              function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N6T2RXG');`,
            }}
          />
          {dev && (
            <script
              dangerouslySetInnerHTML={{
                __html: `window.prismic = {endpoint: 'https://plotly.prismic.io/api/v2'};`,
              }}
            />
          )}
          {dev && (
            <script async type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js" />
          )}
          <script id="drift"
          dangerouslySetInnerHTML={{__html: `!function() {var t = window.driftt = window.drift = window.driftt || [];
                                                          if (!t.init) {
                                                            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                                                            t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                                                            t.factory = function(e) {
                                                              return function() {
                                                                var n = Array.prototype.slice.call(arguments);
                                                                return n.unshift(e), t.push(n), t;
                                                              };
                                                            }, t.methods.forEach(function(e) {
                                                              t[e] = t.factory(e);
                                                            }), t.load = function(t) {
                                                              var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                                                              o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                                                              var i = document.getElementsByTagName("script")[0];
                                                              i.parentNode.insertBefore(o, i);
                                                            };
                                                          }
                                                        }();
                                                        drift.SNIPPET_VERSION = '0.3.1';
                                                        drift.load('4t5t45cv8ey2');`}}
          />
        </Head>
        <body>
          {/* Google Tag Manager Tags */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6T2RXG"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
