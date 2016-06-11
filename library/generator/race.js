'use strict'
module.exports = () => {
  let list = 
    [
      'dwarf',
      'elf',
      'human',
      'half-elf',
      'orc',
      'half-orc',
      'halfling',
      'undead',
      'forest sprite',
      'goblin',
      'troll'
    ]
  let randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
