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

    /**
     * Static Files
     */
    server.get('/robots.txt', (req, res) => {
      return res.sendFile('/static/robots.txt');
    });
    server.get('/sitemap.xml', (req, res) => {
      return res.sendFile('/static/sitemap.xm');
    });
  }

  /**
   * New Pages
   */
  server.get('/p/:slug', (req, res) => {
    const queryParams = { slug: req.params.slug, docType: 'page' };
    return app.render(req, res, '/p', queryParams);
  });
  /**
   * Home
   */
  server.get('/', (req, res) => {
    const queryParams = { slug: 'home' };
    return app.render(req, res, '/p', queryParams);
  });
  server.get('/dash/pricing', (req, res) => {
    const queryParams = { slug: 'dash-services' };
    return app.render(req, res, '/p', queryParams);
  });

  /**
   * Customer Stories: Goji
   */
  server.get('/products/enterprise/customer-stories/goji', (req, res) => {
    const queryParams = { slug: 'goji' };
    return app.render(req, res, '/p-customer-story', queryParams);
  });
  /**
   * Customer Stories: C12
   */
  server.get('/products/enterprise/customer-stories/c12-energy', (req, res) => {
    const queryParams = { slug: 'c12-energy' };
    return app.render(req, res, '/p-customer-story', queryParams);
  });
  /**
   * Chart Studio
   */
  server.get('/online-chart-maker', (req, res) => {
    const queryParams = { slug: 'chart-studio' };
    return app.render(req, res, '/p', queryParams);
  });
  /**
   * Database Connectors
   */
  server.get(
    ['/database-connectors', '/free-sql-client-download'],
    (req, res) => {
      const queryParams = { slug: 'falcon-sql-editor' };
      return app.render(req, res, '/p', queryParams);
    }
  );
  /**
   * Slide Decks
   */
  server.get(
    ['/powerpoint-online', '/online-presentation-tool'],
    (req, res) => {
      const queryParams = { slug: 'slide-decks' };
      return app.render(req, res, '/p', queryParams);
    }
  );
  /**
   * Dashboards and Reporting
   */
  server.get(['/dashboards', '/dashboards-and-report'], (req, res) => {
    const queryParams = { slug: 'dashboards-and-reporting' };
    return app.render(req, res, '/p', queryParams);
  });
  /**
   * Plotly Py
   */
  server.get('/d3-js-for-python-and-pandas-charts', (req, res) => {
    const queryParams = { slug: 'plotly-py' };
    return app.render(req, res, '/p', queryParams);
  });
  /**
   * Plotly R
   */
  server.get('/d3-js-for-r-and-shiny-charts', (req, res) => {
    const queryParams = { slug: 'plotly-r' };
    return app.render(req, res, '/p', queryParams);
  });
  /**
   * Plotly Js
   */
  server.get('/plotly-js-scientific-d3-charting-library', (req, res) => {
    const queryParams = { slug: 'plotly-js' };
    return app.render(req, res, '/p', queryParams);
  });

  /**
   * Industries
   */
  server.get('/products/industries', (req, res) => {
    return app.render(req, res, '/industries');
  });

  server.get('/products/industries/:id', (req, res) => {
    const queryParams = { id: req.params.id };
    return app.render(req, res, '/single-industries', queryParams);
  });

  /**
   * Customer Stories
   */
  server.get('/products/enterprise/customer-stories', (req, res) => {
    return app.render(req, res, '/customer-stories');
  });
  server.get('/products/enterprise/customer-stories/:slug', (req, res) => {
    const queryParams = { slug: req.params.slug };
    return app.render(req, res, '/p-customer-story', queryParams);
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
