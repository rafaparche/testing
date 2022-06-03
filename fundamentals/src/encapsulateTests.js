const {sum,subtract} = require('../math');

//we want run all tests in one go with clear error messages

function test(title,callback){
    try{
        callback();
        console.info(`✓ ${title}`)
    }catch (e){
        console.info(`x ${title}`)
        console.error(e)
    }
}

test('sum 2 + 2 == 4',() => { expect(sum(2,2)).toBeEqual(4)})
test('subtract 2 - 2 == 0',() => { expect(subtract(2,2)).toBeEqual(0)})

function expect(result){
    return {
        toBeEqual(expected){
            if ( result != expected ){
                throw new Error(`${result} does not match with ${expected}`)
            }
        }
    }
}
