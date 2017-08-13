import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  speech: {},
  forecast:{}
}

import speech from './Plugins/Speech/ducks'
import forecast from './Plugins/Forecast/ducks'

export function configureStore() {
  const store = createStore(
    combineReducers({
      speech,
      forecast
    }),
    applyMiddleware(thunk),
  )
  return store;
};
export const store = configureStore();
