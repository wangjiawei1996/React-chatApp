// name='mrs'
// course = '你好'
// console.log(`你好${name}, 我们${course}`)
// const name="佳维"
// name = '师茂'
// console.log(name)
// setTimeout(() => {
//     console.log("你好 node.js")
// }, 5000)
// const hello = (name="蜗牛") => {
//   console.log(`hello${name}`)
// }
// hello()
// hello('北京')
// function hello(name1, name2) {
//   console.log(name1, name2)
// }
// arr = ['蜗牛', 'imooc']
// hello(...arr)
// const obj = {name:'imooc', course:'React App'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// const obj1 = {name:'imooc', course:'React'}
// const obj2 = {type: 'IT', sex: '18'}
// console.log({...obj1,...obj2})
// const arr = ['hello', 'imooc']
// const obj = {name: 'imooc',course: 'react'}
// const {name,course} = obj
// console.log(name, '|', course)
// class MyApp{
//   constructor() {
//     this.name='imooc'
//   }
//   sayHello () {
//     console.log(`hello ${this.name}`)
//   }
// }
// const app = new MyApp()
// app.sayHello()
// const arr = [1, 2, 3]
// console.log(arr.map(v=>v*2))
// const arr = [1,2,34,5,2,1,34]
// console.log(...new Set(arr))
// [1,2,3,4].forEach(function(value, index) {
//   console.log(value)
// })
const arr = Object.keys({name:'imooc', course:'React'}).length
console.log(arr)