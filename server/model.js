const mongoose = require('mongoose')
//连接mongo
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)