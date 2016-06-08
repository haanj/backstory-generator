'use strict'
module.exports = () => {
  let list = 
    [
      'black',
      'grey',
      'blue',
      'light blue',
      'teal',
      'green',
      'light green',
      'brown',
      'amber',
      'purple',
      'hazel',
      'dark blue',
      'dark green'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
