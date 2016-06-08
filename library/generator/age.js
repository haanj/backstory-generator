'use strict'
module.exports = () => {
  let list = 
    [
      'child',
      'young adult',
      'adult',
      'middle-aged adult',
      'senior adult',
      'ancient'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
