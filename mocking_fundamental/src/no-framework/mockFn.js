const utils = require("../utils")
const thumbWar = require("../thumb-war")
const assert =  require("assert")

// we are self implementing fn mock
const originalUtils = utils.getWinner;

function fn(impl){
    const mockFn = (...args) =>
    {
        mockFn.mock.calls.push(args)
        return impl(...args)
    }

    mockFn.mock = {calls: []}
    return mockFn;
}

utils.getWinner = fn( (p1,p2) => p1 );

assert.equal(thumbWar("rafa","adri"), "rafa");
assert.deepStrictEqual(utils.getWinner.mock.calls,[["rafa","adri"],["rafa","adri"]]);

utils.getWinner = originalUtils;