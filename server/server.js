const express = require('express')

//新建App
const app = express()
app.get('/', function(req, res) {
  res.send("<h1>Hello World</h1>")
})
app.get('/news', function(req, res) {
  res.json({name:'imooc', type: 'IT'})
})
app.listen(9093, function() {
  console.log('Node app start at port 9093')
})