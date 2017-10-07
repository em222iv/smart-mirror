const cities = require("all-the-cities")
require("string_score");

var interpretor = function (spokenCommand) {

  var answer, scoreValue, highestScoreValue;
  highestScoreValue = 0;

  commands.forEach((command) => {
    var scoreValue = command.score(spokenCommand)
    console.log('scoreValue',scoreValue)
    if (scoreValue > highestScoreValue){
          highestScoreValue = scoreValue
          answer = command
    }
  })

  console.log(answer, scoreValue, highestScoreValue)
  return answer;

  //LOOK FOR CITIES
  // let city = cities.filter(city => {
  //    return city.name.match(spokenCommand)
  // })
}

const commands = [
    'turn the lights on',
    'turn the lights off',
    'turn the lights purple',
    'turn the lights turquoise',
    'turn the lights white',
    'turn the lights black'
]

module.exports = interpretor
