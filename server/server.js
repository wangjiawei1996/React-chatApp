const express = require('express')
const mongoose = require('mongoose')
//连接mongo
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connection success')
})
const User = mongoose.model('user', new mongoose.Schema({
  user:{type:String,require: true},
  age:{type:Number,require: true}
}))
//新增数据
// User.create({
//   user: 'xiaoming',
//   age:18
// }, function(err, doc) {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })
//新建App
// User.remove({age: 18}, function(err, doc) {
//   if (!err) {
//     console.log('delete success')
//     User.find({}, function(e, d) {
//       console.log(d)
//     })
//   }
// })
// User.update({'user': 'xiaohua'}, {'$set':{age:26}}, function(err, doc) {
//   console.log(doc)
// })
const app = express()
app.get('/', function(req, res) {
  res.send("<h1>Hello World</h1>")
})
app.get('/data', function(req, res) {
  User.findOne({user:'xiaoming'},function(err, doc) {
    res.json(doc)
  })
})
app.listen(9093, function() {
  console.log('Node app start at port 9093')
})