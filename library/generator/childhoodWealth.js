'use strict'
module.exports = () => {
  let list = 
    [
      'extremely poor',
      'poor',
      'low income',
      'middle class',
      'upper class',
      'extremely wealthy',
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
