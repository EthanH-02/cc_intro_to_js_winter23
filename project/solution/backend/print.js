const { printPrologue, printBoardInfo, printRows } = require('../work.js')

function printItems() {
    console.log('\t- v : Link')
    console.log('\t- ⊣ : sword')
    console.log('\t- → : arrow')
    console.log('\t- ⟐ : rupee')
    console.log('\t- @ : Octorok')
    console.log('\t- . : map')
}

function printControls() {
    console.log('\t- w : move up')
    console.log('\t- a : move left')
    console.log('\t- s : move down')
    console.log('\t- d : move right')
    console.log()
    console.log('\t- i : look up')
    console.log('\t- j : look left')
    console.log('\t- k : look down')
    console.log('\t- l : look right')
    console.log()
    console.log('\t- q : sword attack')
    console.log('\t- e : shoot arrow')
}

function printMap(link, map) {
    printBoardInfo(link.getHeartString(), link.getWallet(), link.getArrows())
    printRows(map.map(row => row.join(' ')))
}

module.exports = {  printPrologue,
                    printItems,
                    printControls,
                    printMap
                 }
