'use strict'
let PORT = process.env.PORT || 3000
let express = require('express')
let app = express()

let publicRouter = express.Router()

require(__dirname + '/routes/story_route')(publicRouter)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET')
  next()
})

app.use(publicRouter)

app.listen(PORT, () => {
  console.log('App listening at port', PORT)
})

