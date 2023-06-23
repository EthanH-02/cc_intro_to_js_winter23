const prompt = require('prompt-sync')();

console.log('Use a small key to open the chest?')
const answer = prompt('Use a small key to open the chest?\n')

///////////////////////////////////////////////////////////
// DO NOT EDIT ABOVE HERE //
///////////////////////////////////////////////////////////

/*  TASK:   Implement code so when the variable 'answer' has the value 'yes'
            print the following string
    
    da-da-da-daaaa
*/

if (answer == 'yes') {
    console.log('da-da-da-daaaa')
}
