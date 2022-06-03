const utils = require("../utils")
const thumbWar = require("../thumb-war")
const assert =  require("assert")

// we are self implementing spyOn

function fn(impl = () => {}){
    const mockFn = (...args) =>
    {
        mockFn.mock.calls.push(args)
        return impl(...args)
    }

    mockFn.mock = {calls: []};
    mockFn.mockImplementation = newImpl => (impl = newImpl)
    return mockFn;
}

function spyOn(obj, fnName){
    const originalFn = obj[fnName];
    obj[fnName] = fn();
    obj[fnName].mockRestore = () => (obj[fnName] = originalFn);
}

spyOn(utils,'getWinner');
utils.getWinner.mockImplementation( (p1,p2) => p1 );

assert.equal(thumbWar("rafa","adri"), "rafa");
assert.deepStrictEqual(utils.getWinner.mock.calls,[["rafa","adri"],["rafa","adri"]]);

utils.getWinner.mockRestore();