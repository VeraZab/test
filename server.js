const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dir: '.', dev})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {

        const server = express()

        server.get('/robots.txt', (req, res) => {
            return res.sendfile('./static/robots.txt')
        })

        server.get('/sitemap.xml', (req, res) => {
            return res.sendfile('./static/robots.txt')
        })

        server.get('/industries', (req, res) => {
            return res.sendfile('./pages/products/industries/index.js')
        })


        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
