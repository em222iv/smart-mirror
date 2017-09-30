import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

var tree = require('../utils/fileIterator.js');
var ducks = {}

export function configureStore() {
  tree.plugins.forEach(plugin => {
    plugin.children.forEach(file => {
      if(file.name === 'ducks.js') {
        let key = plugin.name.toLowerCase();
        let val = require(file.path).default
        Object.assign(ducks, {[key]:val})
      }
    })
  })
  console.log('ducks',ducks)
  const store = createStore(
    combineReducers(ducks),
    applyMiddleware(thunk),
  )
  return store;
};
export const store = configureStore();
