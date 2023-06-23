/*  TASK:   Write a function called 'isWindReq'. Within the function if the
            value passed in is '^<>' return true otherwise return false
*/



///////////////////////////////////////////////////////////
// DO NOT EDIT BELOW HERE //
///////////////////////////////////////////////////////////

let windReq = '^<>'
let balladGales = 'v><^'

if (isWindReq(windReq)) {
    console.log('You conducted the Wind\'s Requiem!')
}

if (isWindReq(balladGales)) {
    console.log('That song does not exist.')
}
