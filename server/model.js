const mongoose = require('mongoose')
//连接mongo
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL,{useNewUrlParser:true},function(err){
  if(err){
      console.log('Connection Error:' + err)
  }else{
  　　console.log('Connection success!') }
})

const models = {
  user: {
    'user': {'type': String, 'require': true},
    'pwd': {'type': String, 'require': true},
    'type': {'type': String, 'require': true},
    'avatar': {'type': String},
    'desc': {'type': String},
    'title': {'type' :String },
    'company': {'type': String},
    'money': {'type': String}
  },
  chat: {
    'chatid':{'type': String},
    'from': {'type': String, 'require': true},
    'to': {'type': String, 'require': true},
    'read':{'type':Boolean, default: false},
    'content': {'type': String, 'require': true, content: ''},
    'create_time':{'type':Number,'default':new Date().getTime()}
  }
}
for (let m in models) {
  mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
  getModel:function(name){
      return mongoose.model(name)
  }
}