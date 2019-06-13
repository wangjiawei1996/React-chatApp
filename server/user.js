const express = require('express') 
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user') // 获取user模型
const _filter = {'pwd':0,'__v':0}
const Chat = model.getModel('chat')

// Chat.remove({},function(e,d){}) // 清除聊天内容
Router.get('/list',function(req,res){
    const {type} = req.query
    // User.remove({},function(e,d){}) //清空用户数据
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
})

// 获取用户聊天信息
Router.get('/getmsglist',function(req,res){
    const user = req.cookies.userid
    User.find({},function(e,userdoc){
        let users = {}
        userdoc.forEach(v=>{
            users[v._id] = {name:v.user,avatar:v.avatar}
        })
        Chat.find({'$or':[{from:user},{to:user}]},function(err,doc){
            if(!err){
                return res.json({code:0,msgs:doc,users:users})
            } 
        })
    })
})




// 登录接口
Router.post('/login',function(req,res){
    const { user,pwd } = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'用户名或者密码错误'})
        }
        res.cookie('userid',doc._id) //保存一个MongoDB生成的id作为cookie
        return res.json({code:0,data:doc})
    })
})

// 注册接口
Router.post('/register',function(req,res){  // 需要安装body-parser插件 server.js
    const {user,pwd,type} = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        // 注册后生成id 得换一种写法
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(function(e,d){
            if(e){
                return res.json({code:1,msg:'后端出错了'})
            }
            const {user,type,_id} = d
            res.cookie('userid',_id)
            return res.json({code:0,data:{user,type,_id}})
        })
        // User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
        //     if(e){
        //         return res.json({code:1,msg:'后端出错了'})
        //     }
        //     return res.json({code:0,msg:'注册用户成功'})
        // })
    })
})
// 读取信息
Router.post('/readmsg',function(req,res){
    const userid = req.cookies.userid
    const {from} = req.body
    Chat.update(
        {from,to:userid},
        {'$set':{read:true}},
        {'multi':true},
        function(err,doc){
        console.log(doc)
        if(!err){
            return res.json({code:0,num:doc.nModified})
        }
        return res.json({code:1,msg:'修改失败'})
    })
})



// 更新个人数据接口
Router.post('/readmsg', function(req, res) {
  const userid = req.cookies.userid
  const { from } = req.body
  Chat.update({from, to: userid}, {read: true}, {'multi': true} ,function(err, doc) {
    if (!err) {
      return res.json({code: 0, num: doc.nModified})
    }
    return res.json({code: 1,msg: '修改失败'})
  })
})
Router.post('/update',function(req,res){
    const userid = req.cookies.userid
    if(!userid){
        return json.dumps({code:1})
    }
    const body = req.body 
    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)  //合并对象 node没有es6环境
        return res.json({code:0,data})
    })
})

// 详情接口
Router.get('/info',function(req,res){
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({code:1,msg:'后端出错了'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})

// 加密加盐
function md5Pwd(pwd){
    const salt = 'react_is_goood_3423423890xdfsd@$#&#*!'
    return  utils.md5(utils.md5(pwd+salt))
}



module.exports = Router