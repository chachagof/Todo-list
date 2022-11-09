const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hiiiiii</h1>')
})

app.listen(port, () => {
  console.log('App is running on http://localhost:3000')
})