'use strict'
module.exports = (race) => {
  return [
    {
      title: 'Race',
      value: require('./race.js')(),
    },
    {
      title: 'Occupation',
      value: require('./occupation.js')(),
    },
    {
      title: 'Age',
      value: require('./age.js')(),
    },
    {
      title: 'Father\'s Occupation',
      value: require('./occupation.js')(),
    },
    {
      title: 'Mother\'s Occupation',
      value: require('./occupation.js')(),
    },
    {
      title: 'Hair Color',
      value: require('./hair.js')(),
    },
    {
      title: 'Eye Color',
      value: require('./eyes.js')(),
    },
    {
      title: 'Height',
      value: require('./height.js')(),
    },
    {
      title: 'Build',
      value: require('./build.js')(),
    },
    {
      title: 'Family Wealth',
      value: require('./childhoodWealth.js')(),
    },
    {
      title: 'Home City Size',
      value: require('./homeCity.js')(),
    },
    {
      title: 'Likes',
      value: require('./interests.js')(),
    },
    {
      title: 'Dislikes',
      value: require('./interests.js')(),
    },
    {
      title: 'Motives',
      value: require('./motives.js')(),
    },
    {
      title: 'Starting Quest',
      value: require('./quests.js')()
    }
  ]




}
