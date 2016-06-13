'use strict'
module.exports = () => {
  let list = 
    [
      'Find who killed your brother',
      'Retrieve a rare artifact',
      'Warn the king of impending doom',
      'Find the lost city',
      'Drive the local lord from power',
      'Save the farm',
      'Start a rebellion',
      'Explore the unexplored'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
