const cities = require("all-the-cities")
var interpretor = function (string) {
  let city = cities.filter(city => {
     return city.name.match(string)
  })
}

module.exports = interpretor
