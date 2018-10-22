const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();
const { join } = require('path');

const Cookies = require('cookies');
const Prismic = require('prismic-javascript');

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(
      '/service-worker.js',
      express.static(join(__dirname, '.next', '/service-worker.js'))
    );
  }

  server.get('/preview', (req, res) => {
    const { token } = req.query;
    Prismic.getApi('https://plotly.prismic.io/api/v2', {
      req: req
    }).then(api => {
      api.previewSession(token, () => '/', '/').then(url => {
        const cookies = new Cookies(req, res);
        cookies.set(Prismic.previewCookie, token, {
          maxAge: 30 * 60 * 1000,
          path: '/',
          httpOnly: false
        });
        res.redirect(302, url);
      });
    });
  });

  /**
   * Home
   */
  server.get('/', (req, res) => {
    const queryParams = { slug: 'home' };
    return app.render(req, res, '/prismic-generator', queryParams);
  });

  /**
   * Catch all
   */
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(8080, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:8080');
  });

});
