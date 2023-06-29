const prompt = require('prompt-sync')();
const { MAP_Y } = require('./constants.js')

///////////////////////////////////////////////////////////
//  DO NOT EDIT ABOVE THIS LINE //
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
//  PRINT TASKS //
///////////////////////////////////////////////////////////

function printPrologue() {

    /*  TODO:   Print the following string:
            The Legend of Zelda by YOUR_NAME
    */

}

function printBoardInfo(heart_string, num_rupee, num_arrow) {

    /*  TODO:   There are three variables:
            - heart_sring
            - num_rupee
            - num_arrow
        
                Print out each of these variables with a
                label Rupees and Arrows before the values

    */

}





///////////////////////////////////////////////////////////
//  VARIABLES TASKS //
///////////////////////////////////////////////////////////

function movingLink(link_x, link_y, dx, dy) {

    /*  TODO:   There are four variables
            - link_x    -> Current Link X coordinates
            - link_y    -> Current Link Y coordinates
            - dx        -> Moving Link by dx units in the X coordinates
            - dy        -> Moving Link by dy units in the Y coordinates
                
                Define two variables new_x and new_y to be
                returned to update Links position.
                
                The final line should be:
                return [new_x, new_y]
    */

}





///////////////////////////////////////////////////////////
//  SCANNING TASKS //
///////////////////////////////////////////////////////////

function titleOfTheHero()  {

    /*  TODO:   Every hero in the Legend of Zelda has the
                title
            The Hero Of ______

                Ask the user for an input and then store
                the value hero_of

                The final line should be:
                return hero_of
    */


}





///////////////////////////////////////////////////////////
//  IF TASKS //
///////////////////////////////////////////////////////////

function hasCollision(x1, y1, x2, y2) {

    /*  TODO:   Given the following coordinates
            - x1
            - y1
            - x2
            - y2

                Test if the the two pairs of coordinates
                match i.e. (x1, y1) is the same as(x2, y2)
                then have a variable overlap that is a
                boolean value

                The final line should be:
                return overlap
    */

}





///////////////////////////////////////////////////////////
//  LOOPS TASKS //
///////////////////////////////////////////////////////////

function printRows(rows) {

    /*  TODO:   Given a list of rows print each row in rows

                Write a loop that iterates over each element printing
                the map out
    */


    // Delete this line once implemented
    // console.log(rows[Math.floor(MAP_Y / 2)])


}




///////////////////////////////////////////////////////////
//  FUNCTION TASKS //
///////////////////////////////////////////////////////////

/*  TODO:   Write a function called canShoot(arrow_count)
            This function is passed a value for the current
            arrow count. If the value is greater than 0
            then return true, otherwise return false
*/



///////////////////////////////////////////////////////////
//  DO NOT EDIT BELOW THIS LINE //
///////////////////////////////////////////////////////////


function wrapper(arrow_count) {
    return canShoot(arrow_count)
}

module.exports = {
    printPrologue,
    printBoardInfo,
    movingLink,
    titleOfTheHero,
    hasCollision,
    printRows,
    wrapper
}
