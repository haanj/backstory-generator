'use strict'
module.exports = () => {
  let list = 
    [
      'homestead',
      'remote village',
      'hamlet',
      'large village',
      'town',
      'large town',
      'city',
      'metropolis',
      'migrant camp'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
