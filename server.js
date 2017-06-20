const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dir: '.', dev})
const handle = app.getRequestHandler()

// let cacheTime = 1000 * 60 * 60 // 1 hour
let cacheTime = 0


if (dev) {
  cacheTime = 0
  console.log('Working on dev...')
}

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 0,
  maxAge: cacheTime
})

app.prepare()
    .then(() => {

        const server = express()

        server.get('/robots.txt', (req, res) => {
            return res.sendfile('./static/robots.txt')
        })

        server.get('/sitemap.xml', (req, res) => {
            return res.sendfile('./static/robots.txt')
        })

        server.get('/products/industries', (req, res) => {
          renderAndCache(req, res, '/industries')
        })

        server.get('/products/industries/:id', (req, res) => {
          const queryParams = { id: req.params.id }
          renderAndCache(req, res, '/single-industries', queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })

    /*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey (req) {
  return `${req.url}`
}

function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  // if (ssrCache.has(key)) {
  //   console.log(`CACHE HIT: ${key}`)
  //   res.send(ssrCache.get(key))
  //   return
  // }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      ssrCache.set(key, html)

      res.send(html)
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}
