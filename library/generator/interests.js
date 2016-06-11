'use strict'
module.exports = () => {
  let list = 
    [
      'fighting',
      'flirting',
      'sailors',
      'treasure',
      'networking',
      'people',
      'farming',
      'quiet',
      'religion',
      'government',
      'freedom',
      'crafting',
      'exploring',
      'lying',
      'nature',
      'cities',
      'animals',
      'herbs',
      'drinking',
      'helping',
      'stealing',
      'vandalism',
      'food',
      'caves',
      'trees',
      'open water',
      'storms',
      'sunshine',
      'pilgrimage',
      'working',
      'building',
      'learning',
      'slacking',
      'leading',
      'following',
      'listening',
      'talking',
      'exercise',
      'healing'
    ]
  //let indexOne = Math.floor(Math.random() * list.length)

  //do {
    //var indexTwo = Math.floor(Math.random() * list.length)
  //} while (indexOne == indexTwo)

  //do {
    //var indexThree = Math.floor(Math.random() * list.length)
  //} while (indexThree == indexOne || indexThree == indexOne)
  
  //return [list[indexOne], list[indexTwo], list[indexThree]]
  
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}
