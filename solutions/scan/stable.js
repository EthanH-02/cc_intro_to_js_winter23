const prompt = require('prompt-sync')();

console.log('Welcome to Dueling Peaks Stable.')

///////////////////////////////////////////////////////////
// DO NOT EDIT ABOVE HERE //
///////////////////////////////////////////////////////////

/*  TASK:   Implement code that asks for asks for a horse name, then prints the
            a response message.

            The message should be passed into the prompt() function call:

    What would you like to name the horse you brought to us today? 

            The printed response should be:
    
    Welcome HORSE_NAME to our stable. What a beautiful horse!
*/

const horse_name = prompt('What would you like to name the horse you brought to us today? ')
console.log(`Welcome ${horse_name} to our stable. What a beautiful horse!`)
