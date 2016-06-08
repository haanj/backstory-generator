'use strict'
module.exports = () => {
  let list = 
    [
      'red',
      'brown',
      'grey',
      'white',
      'black',
      'orange',
      'auburn',
      'mousey',
      'blond/blonde',
      'light brown',
      'dark brown',
      'chestnut',
      'yellow'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
