'use strict'
module.exports = () => {
  let list = 
    [
      'gold',
      'love',
      'fate',
      'a curse',
      'sickness',
      'glory',
      'revenge',
      'religion'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
