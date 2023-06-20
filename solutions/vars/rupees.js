const prompt = require('prompt-sync')();

let green_rupees = Number(prompt('How many Green Rupees are in your wallet? '))
let blue_rupees = Number(prompt('How many Blue Rupees are in your wallet? '))
let red_rupees = Number(prompt('How many Red Rupees are in your wallet? '))

///////////////////////////////////////////////////////////
// DO NOT EDIT ABOVE HERE //
///////////////////////////////////////////////////////////

/*  TASK:   Implement ways to store the information about the wallet. The
            number of rupees are stored within the three variables:
                - green_rupees  : have a value of 1
                - blue_rupees   : have a value of 5
                - red_rupees    : have a value of 20

            Now implement four variables:
                - green_value
                - blue_value
                - red_value
                - wallet
*/


let wallet = 0
const green_value = green_rupees
const blue_value = blue_rupees * 5
const red_value = red_rupees * 20
const wallet = green_value + blue_value + red_value

///////////////////////////////////////////////////////////
// DO NOT EDIT BELOW HERE //
///////////////////////////////////////////////////////////

console.log(`Your wallet has a value of ${wallet}`)
console.log(`\tGreen Rupees: ${green_rupees} x 1 = ${green_value}`)
console.log(`\tBlue Rupees: ${blue_rupees} x 4 = ${blue_value}`)
console.log(`\tRed Rupees: ${red_rupees} x 20 = ${red_value}`)

wallet -= 100

if (wallet < 0) {
    console.log(`You can not purchase a bomb for 100 Rupees.`)
} else {
    console.log(`After purchasing a bomb for 100 Rupees the current wallet balance is ${wallet}.`)
}
