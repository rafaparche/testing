const {sumAsync,subtractAsync} = require('../math');

//adding async support to tets

async function test(title, callback) {
    try {
         await callback();
        console.info(`✓ ${title}` )
    } catch (e) {
        console.info(`x ${title}`)
        console.error(e)
    }
}



test('sum 2 + 2 == 4',async () => {  expect( await sumAsync(2,2)).toBeEqual(4)})
test('subtract 2 - 2 == 0',async () => {  expect( await subtractAsync(2,2)).toBeEqual(0)})

 function expect(result){
    return {
        toBeEqual(expected) {
            if (result != expected) {
                throw new Error(`${result} does not match with ${expected}`)
            }
        }
    }
}
