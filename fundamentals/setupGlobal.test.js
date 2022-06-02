const {sumAsync,subtractAsync} = require('../math');

//we want reuse our functions across multiple files

test('sum 2 + 2 == 4',async () => {  expect( await sumAsync(2,2)).toBe(4)})
test('subtract 2 - 2 == 0',async () => {  expect( await subtractAsync(2,2)).toBe(0)})


