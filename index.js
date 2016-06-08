'use strict'
let PORT = process.env.PORT || 3000
let express = require('express')
let app = express()

let publicRouter = express.Router()

require(__dirname + '/routes/story_route')(publicRouter)

app.use(publicRouter)

app.listen(PORT, () => {
  console.log('App listening at port', PORT)
})

