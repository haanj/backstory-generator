'use strict'
module.exports = (race) => {
  let list = 
    [
      'miner',
      'alchemist',
      'bartender',
      'tailor/seamstress',
      'innkeeper',
      'adventurer',
      'scribe',
      'priest/priestess',
      'soldier',
      'guard',
      'cook',
      'arborist',
      'herbalist',
      'naturalist',
      'scholar',
      'bard',
      'exorcist',
      'farmer',
      'merchant',
      'blacksmith',
      'silversmith',
      'tinsmith',
      'magic-user',
      'bandit',
      'thief',
      'beggar',
      'healer',
      'explorer',
      'cartographer',
      'spy',
      'brewer',
      'fisher',
      'boatman',
      'sailor',
      'harbormaster',
      'mayor',
      'banker',
      'civil servant',
      'investigator',
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}






















