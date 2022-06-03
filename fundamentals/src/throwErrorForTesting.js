const {sum,subtract} = require('../math');

//throw an error when expected does not match
const resultSum = sum(2,2)
const expectedSum = 4

if ( resultSum != expectedSum ){
    throw new Error("sum function does not return expected value")
}


const resultSub = subtract(2,2)
const expectedSub = 0

if ( resultSub != expectedSub ){
    throw new Error("subtract function does not return expected value")
}