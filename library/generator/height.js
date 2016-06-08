'use strict'
module.exports = () => {
  let list = 
    [
      'stunted',
      'short',
      'average',
      'above average',
      'tall',
      'giant'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
