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
import plugins from './components/pluginContainer/ducks'

export function configureStore() {
  const store = createStore(
    combineReducers({
      speech,
      forecast,
      plugins
    }),
    applyMiddleware(thunk),
  )
  return store;
};
export const store = configureStore();
