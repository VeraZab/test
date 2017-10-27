const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dir: '.', dev})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {

        const server = express()

      server.get('/p/:slug', (req, res) => {
        const queryParams = { slug: req.params.slug, docType: 'page' }
        return app.render(req, res, '/p', queryParams)
      })

        server.get('/robots.txt', (req, res) => {
            return res.sendfile('./static/robots.txt')
        })

        server.get('/sitemap.xml', (req, res) => {
            return res.sendfile('./static/robots.txt')
        })

        server.get('/products/industries', (req, res) => {
            return app.render(req, res, '/industries')
        })
        server.get('/free-sql-client-download', (req, res) => {
            return app.render(req, res, '/database-connectors')
        })
        server.get('/online-presentation-tool', (req, res) => {
            return app.render(req, res, '/powerpoint-online')
        })

        server.get('/dashboards-and-reports', (req, res) => {
            return app.render(req, res, '/dashboards')
        })

        server.get('/products/industries/:id', (req, res) => {
            const queryParams = {id: req.params.id}
            return app.render(req, res, '/single-industries', queryParams)

        })

        server.get('/products/enterprise/customer-stories', (req, res) => {
            return app.render(req, res, '/customer-stories')

        })

        server.get('/products/enterprise/customer-stories/:id', (req, res) => {
            const queryParams = {id: req.params.id}
            return app.render(req, res, '/single-customer-stories', queryParams)

        })

        server.get('/tableau-alternative', (req, res) => {
            return app.render(req, res, '/tableau-alternative')

        })

        server.get('/highcharts-alternative', (req, res) => {
            return app.render(req, res, '/highcharts-alternative', queryParams)
        })



        // new pages

        server.get('/powerpoint-online', (req, res) => {
            return app.render(req, res, '/prismic/slide-decks')
        })

        server.get('/dashboards', (req, res) => {
            return app.render(req, res, '/prismic/dashboards-and-reporting')
        })

        server.get('/database-connectors', (req, res) => {
            return app.render(req, res, '/prismic/falcon')
        })

        server.get('/online-chart-maker', (req, res) => {
            return app.render(req, res, '/prismic/chart-studio')
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })