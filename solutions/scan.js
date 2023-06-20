const prompt = require('prompt-sync')();

console.log('Welcome to Kokiri Shop.')
console.log('How many arrows do you want?')

///////////////////////////////////////////////////////////
// DO NOT EDIT ABOVE HERE //
///////////////////////////////////////////////////////////

/*  TASK:   Implement code that takes user input and then prints the number of
            again and then print the following response. For reference 1 arrow
            will cost 2 Rupees.

    For n arrows, that will cost x Rupees.

    CHALLENGE:  Kokiri Shop only sells Rupees in bundles of 10 each costing 20
                Rupees. Research solutions or ask a tutor for help

    For n arrows, you will have to buy m arrows, that will cost x Rupees.
*/

const arrow_count = prompt()
console.log(`For ${arrow_count} arrows, that will cost ${arrow_count*2} Rupees.`)

const bundle_count = Math.ceil(arrow_count/ 10) * 10
console.log(`For ${arrow_count} arrows, you will have to buy ${bundle_count} arrows, that will cost ${bundle_count * 20} Rup`)
