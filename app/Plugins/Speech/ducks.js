
// Constants
const LISTENING = 'LISTENING';
const UPDATE = 'UPDATE';

const initialState = {
  text: "",
  listening:false
}

// Reducer
export default function speech(state = initialState, action) {
  switch (action.type) {
  case UPDATE:
    console.log('reducer updated with: ', action.payload)
    if(action.payload.length === 0)
      return Object.assign({}, state, {
        text:action.payload
      });
    return Object.assign({}, state, {
        text:action.payload
      });
    case LISTENING:
      return Object.assign({}, state, {
          listening:action.payload
        });
  default:
    return state
  }
}

// Action Creators
export function update(payload) {
  return { type: UPDATE, payload };
}

export function listening(payload) {
  return { type: LISTENING, payload };
}

// Thunks
