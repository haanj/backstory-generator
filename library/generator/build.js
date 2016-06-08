'use strict'
module.exports = () => {
  let list = 
    [
      'very skinny',
      'skinny',
      'average weight',
      'pudgy',
      'fat',
      'obese',
      'brawny',
      'muscular',
      'lean',
      'weak'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
