const {sum,subtract} = require('../math');

//we want reuse assertions in our tests

function expect(result){
    return {
        toBeEqual(expected){
            if ( result != expected ){
                throw new Error(`${result} does not match with ${expected}`)
            }
        }
    }
}

expect(sum(2,2)).toBeEqual(4);
expect(subtract(2,2)).toBeEqual(0);