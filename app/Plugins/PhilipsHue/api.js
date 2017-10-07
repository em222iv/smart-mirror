
var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;
var host = "192.168.10.202",
    username = "GE3kFQoxdSAxqmgRhKyj9EScx2Rg4N2LPO6O6A04",
    api =  new HueApi(host, username),
    state = lightState.create()

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};
var displayStatus = function(status) {
    console.log(JSON.stringify(status, null, 2));
};

export const hueApi = {

  getFullState: async () => {
     let bridge = await hue.nupnpSearch()
     console.log(bridge)
     host = bridge[0].ipaddress
     api =  new HueApi(host, username)
     console.log('host',host,api)
     return await api.getFullState()
   },

  setRGBLight: async (id,rgb) => {

      api.setLightState(id, state.rgb(rgb.red,rgb.green,rgb.blue))
  },

  lightOn: async id => {
    return await api.setLightState(id, state.on())
      .then(() => api.lightStatus(id))
      .then(lightState => {return {[id]:lightState}})
  },

  lightOff: async id => {
    return await api.setLightState(id, state.off())
      .then(() => api.lightStatus(id))
      .then(lightState => {return {[id]:lightState}})
  },

}
