const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV == 'development'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/blog/:slug', (req, res) => {
    return app.render(req, res, '/post', req.params)
  })

  server.get('/blog/category/:slug', (req, res) => {
    return app.render(req, res, '/blog-category', req.params)
  })

  server.get('/project/:slug', (req, res) => {
    return app.render(req, res, '/project', req.params)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
