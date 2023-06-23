const prompt = require('prompt-sync')();

const item = prompt('Which item has Link acquired: '))

///////////////////////////////////////////////////////////
// DO NOT EDIT ABOVE HERE //
///////////////////////////////////////////////////////////

/*  TASK:   Depending on the value of the string 'item' print the following

            'item' is 'Master Sword'
    Link acqiured the legendary Master Sword!

            'item' is 'Hylian Shield'
    Link acquired the unbreakable Hylian Shield

            'item' is 'Bow'
    Link acquired the powerful Bow

            'item' is 'Bomb'
    Link acquired a set of Bombs

            Otherwise print the following
    No such item exists in Hyrule
*/

if (item == 'Master Sword') {
    console.log('Link acqiured the legendary Master Sword!')
} else if (item == 'Hylian Shield') {
    console.log('Link acquired the unbreakable Hylian Shield')
} else if (item == 'Bow') {
    console.log('Link acquired the powerful Bow')
} else if (item == 'Bomb') {
    console.log('Link acquired a set of Bombs')
} else {
    console.log('No such item exists in Hyrule')
}
