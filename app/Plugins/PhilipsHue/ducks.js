
import {hueApi} from './api'

// Constants
const LIGHT_OFF = 'LIGHT_OFF';
const LIGHT_ON = 'LIGHT_ON';
const ALL_LIGHTS_ON = 'ALL_LIGHTS_ON';
const ALL_LIGHTS_OFF = 'ALL_LIGHTS_OFF';
const SET_LIGHT_RGB = 'SET_LIGHT_RGB';
const SET_LIGHT_WHITE = 'SET_LIGHT_WHITE';
const SET_LIGHT_PURPLE = 'SET_LIGHT_PURPLE';

const CONNECT_TO_BRIDGE = 'CONNECT_TO_BRIDGE';
const GET_FULL_BRIDGE_STATE = 'GET_FULL_BRIDGE_STATE';

const initialState = {
  bridge:{},
  lights:[]
}

// Reducer
export default function philipshue(state = initialState, action) {
  switch (action.type) {

  case GET_FULL_BRIDGE_STATE:
    var newState =  state;
    newState.bridge = action.payload
    newState.lights = action.payload.lights;
    return Object.assign(state, newState);

  case LIGHT_ON:
    var newState =  state;
    newState.lights = action.payload;
    return Object.assign(state, newState);

  case LIGHT_OFF:
    var newState =  state;
    newState.lights = action.payload;
    return Object.assign(state, newState);

  default:
    return state
  }
}

// Action Creators
export const setFullBridgeState = payload => {
    return {
        type: GET_FULL_BRIDGE_STATE,
        payload
    }
}

export function lightOn(payload) {
  return { type: LIGHT_ON, payload };
}

export function lightOff(payload) {
  return { type: LIGHT_OFF, payload };
}

// Thunks
export const getFullBridgeState = () => {
    return dispatch => {
        hueApi.getFullState()
            .then(response => dispatch(setFullBridgeState(response)))
            .catch(error => console.log(error))
    }
}

export const setLightOn = id => {
    return dispatch => {
        hueApi.lightOn(id)
            .then(response => dispatch(lightOn(response)))
            .catch(error => console.log(error))
    }
}

export const setLightOff = id => {
    return dispatch => {
        hueApi.lightOff(id)
            .then(response => dispatch(lightOff(response)))
            .catch(error => console.log(error))
    }
}

export const setLightRGB = (id,rgb) => {
    return dispatch => {
        hueApi.setRGBLight(id,rgb)
            .then(response => dispatch(lightOff(response)))
            .catch(error => console.log(error))
    }
}
