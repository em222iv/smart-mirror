import {
  combineReducers,
  createStore,
} from 'redux';

function text(state = '', action) {
  switch (action.type) {
  case 'UPDATE':
    console.log('reducer updated with: ', action.payload)
    return action.payload
  default:
    return state
  }
}

export function configureStore(initialState = 'Well Hello there! Say the word "Sonus" and then tell him something nice!') {
  const store = createStore(
    text,
    initialState,
  )
  return store;
};
export const store = configureStore();
