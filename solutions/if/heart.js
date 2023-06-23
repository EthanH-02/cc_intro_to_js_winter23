const prompt = require('prompt-sync')();

const num_pieces = Number(prompt('How many heart pieces does Link have? '))

///////////////////////////////////////////////////////////
// DO NOT EDIT ABOVE HERE //
///////////////////////////////////////////////////////////

/*  TASK:   If the number of the variable 'heart_pieces' is greater than or
            equal to 4 print the following message
    
    Your life has increased by one and is now fully replenished!

            Otherwise find the number of pieces left and print the following
    
    Collect four to increase your heart capacity by one. NUM_LEFT to go!
*/

if (num_pieces >= 4) {
    console.log('Your life has increased by one and is now fully replenished!')
} else {
    console.log(`Collect four to increase your heart capacity by one. ${4 - num_pieces} to go!`)
}
