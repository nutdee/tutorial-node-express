const express = require('express')
const app = express()

const config = require('./configs/app')

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(config.port, () => {
  console.log('Start server at port 3030.')
})