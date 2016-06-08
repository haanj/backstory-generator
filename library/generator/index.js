'use strict'
module.exports = (race) => {
  return {
    race: race,
    occupation: require('./occupation.js')(),
    age: require('./age.js')(),
    occupationFather: require('./occupation.js')(),
    occupationMother: require('./occupation.js')(),
    colorHair: require('./hair.js')(),
    colorEyes: require('./eyes.js')(),
    height: require('./height.js')(),
    build: require('./build.js')(),
    childhoodWealth: require('./childhoodWealth.js')(),
    homeCity: require('./homeCity.js')(),
    likes: require('./interests.js')(),
    dislikes: require('./interests.js')(),
    motive: require('./motives.js')(),
    quest: require('./quests.js')()
  }
}
