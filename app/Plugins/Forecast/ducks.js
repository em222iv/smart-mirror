import weather from 'weather-js'

// Constants
const UPDATE_WEATHER = 'UPDATE_WEATHER';
const initialState = null

// Reducer
export default function forecast(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WEATHER:
      return Object.assign({}, state, action.payload);
  default:
    return state
  }
}

// Action Creators

// Thunks
export function updateWeather() {
   return function (dispatch) {
        weather.find(fixtures, (err, result) => {
        if(err) return;
            let payload = {
              today: {
                temp:result[0].current.temperature,
                hum:result[0].current.humidity,
                desc:result[0].current.skytext,
                windspeed:result[0].current.windspeed
              },
              forecast:[
                {temp: result[0].forecast[0].high},
                {temp: result[0].forecast[1].high},
                {temp: result[0].forecast[2].high},
                {temp: result[0].forecast[3].high},
                {temp: result[0].forecast[4].high}
              ]
            }
           dispatch({ type: UPDATE_WEATHER, payload })
        });
   }
}

const fixtures = {
  search: 'Skärsätra, SE',
  degreeType: 'C'
}
