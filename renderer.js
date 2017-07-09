var createStore = require('redux').createStore

function text(state = 'Hey there', action) {
  switch (action.type) {
  case 'UPDATE':
    console.log('reducer updated with: ',action.payload)
    return action.payload
  default:
    return state
  }
}

let store = createStore(text)

store.subscribe(() =>
  console.log('subscribtion: ',store.getState())
)
 module.exports = store;
