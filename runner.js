const Link = require('./link.js')
const Octorok = require('./octorok.js')
const Arrow = require('./arrow.js')
const Rupee = require('./rupee.js')
const { mapFormer } = require('./print_map.js')
const { printPrologue, printItems, printControls, printMap } = require('./print.js')
const { loopBoolQuestion, tick } = require('./control.js')
const { MAP_X, MAP_Y, OCTOROK_START } = require('../constants.js')
const { titleOfTheHero } = require('../work.js')


// Print the prologue written by the student
printPrologue()

// Creates Link in the middle of the map
let link = new Link(Math.floor(MAP_X / 2), Math.floor(MAP_Y / 2), 3, titleOfTheHero())

// Create a list for all the active elements of the game board
let octoroks = []
let rupees = []
let arrows = []


// Starts by spawning in the OCTOROK_START number of Octoroks onto the map
for (let i = 0 ; i < OCTOROK_START ; i ++) {
    // Generates a random position on the board that isn't Link's position
    const [x, y] = link.getNonLinkPos()
    octoroks.push( new Octorok(x, y))
}

// Asks if a player wishes to see the item list and controls
if (loopBoolQuestion('Item list? (Y/N): ')) { printItems() }
if (loopBoolQuestion('Controls? (Y/N): ')) { printControls() }

// While link isn't dead 
for (let i = 0 ; !link.isDead() ; i++) {
    tick(i, link, octoroks, rupees, arrows)
}

console.log('Game Over')
