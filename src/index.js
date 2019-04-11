//新建store
import { createStore } from 'redux';
//通过reducer遍历 根据老state和action形成新的状态
function count(state=0, action) {
  switch(action.type) {
    case '加机关枪':
      return state+1;
    case '减机关枪':
      return state-1;
    default:
      return 10
  }
}
const store = createStore(count)
const init = store.getState()
console.log(init)
function listener() {
  const current = store.getState()
  console.log(`现在有机关枪${current}把`)
}
store.subscribe(listener)
//派发事件 传递action
store.dispatch({type:'加机关枪'})
store.dispatch({type:'加机关枪'})
store.dispatch({type:'加机关枪'})
store.dispatch({type:'减机关枪'})