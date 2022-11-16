const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 3000
// 引用路由器
const routes = require('./routes')

require('./config/mongoose')

const app = express()

// 載入handlebars
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 載入body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// 載入method-override
app.use(methodOverride('_method'))
// 將 request 導入路由器
app.use(routes)
// listen app
app.listen(port, () => {
  console.log('App is running on http://localhost:3000')
})