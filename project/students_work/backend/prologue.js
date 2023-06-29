function printPrologue() {

    /*  TODO:   Print the following string:
            The Legend of Zelda by YOUR_NAME
    */

    console.log('The Legend of Zelda')
}

function printBoardInfo(heart_string, num_rupee, num_arrow) {

    /*  TODO:   There are three variables:
            - heart_sring
            - num_rupee
            - num_arrow
        
                Print out each of these variables with a
                label Rupees and Arrows before the values

    */

    console.log(heart_string)
    console.log(`\tRupees: ${num_rupee}`)
    console.log(`\tArrows: ${num_arrow}`)
}


///////////////////////////////////////////////////////////
//  DO NOT EDIT BELOW THIS LINE //
///////////////////////////////////////////////////////////

function printItems() {
    console.log('\t- v : Link')
    console.log('\t- # : shield')
    console.log('\t- ⊣ : sword')
    console.log('\t- → : arrow')
    console.log('\t- . : map')
    console.log('\t- ⟐ : rupee')
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

function printMap(map) {
    printBoardInfo()
    map.forEach((row) => console.log(row.join(' ')))
}

module.exports = {  printPrologue,
                    printItems,
                    printControls,
                    print
                 }