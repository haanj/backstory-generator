'use strict'
module.exports = () => {
  let list = 
    [
      'Find who killed your brother',
      'Retrieve a rare artifact',
      'Warn the king of impending doom'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
