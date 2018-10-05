const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();
const { join } = require('path');

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(
      '/service-worker.js',
      express.static(join(__dirname, '.next', '/service-worker.js'))
    );
  }
  /**
   * Home
   */
  server.get('/', (req, res) => {
    const queryParams = { slug: 'home' };
    return app.render(req, res, '/p', queryParams);
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
