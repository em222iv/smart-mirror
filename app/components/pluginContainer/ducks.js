
// Constants
const UPDATE = 'UPDATE';

const initialState = {
  plugin:  undefined,
}

// Reducer
export default function plugins(state = initialState, action) {
  switch (action.type) {
  case UPDATE:
    switch (action.payload) {
      case 'karta':
        return {plugin:'Karta'}
        break;
      case 'stäng':
        return {plugin:undefined}
        break;
      default:
      return {plugin:undefined}

    }
  default:
    return state
  }
}

// Action Creators
export function update(payload) {
  return { type: UPDATE, payload };
}

// Thunks
