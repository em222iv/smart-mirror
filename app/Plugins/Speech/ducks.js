
// Constants
const LISTENING = 'LISTENING';
const UPDATE = 'UPDATE';
const EMPTY = 'EMPTY';

const initialState = {
  text: "",
  listening:false
}

// Reducer
export default function speech(state = initialState, action) {
  switch (action.type) {
  case UPDATE:
    if(action.payload.length === 0)
      return Object.assign({}, state, {
        text:action.payload
      });
    return Object.assign({}, state, {
        text:action.payload
      });

    case EMPTY:
      return Object.assign({}, state, {
          text:"",
          listening:false
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
export function empty() {
  return { type: EMPTY };
}

export function listening(payload) {
  return { type: LISTENING, payload };
}

// Thunks
