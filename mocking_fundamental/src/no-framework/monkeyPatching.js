const utils = require("../utils")
const thumbWar = require("../thumb-war")
const assert =  require("assert")


//we want mock functions to return always same winner
const originalUtils = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

assert.equal(thumbWar("rafa","adri"), "rafa");

utils.getWinner = originalUtils;