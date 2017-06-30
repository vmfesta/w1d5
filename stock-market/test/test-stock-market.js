var checkProfit = require("../lib/stock-market");
var assert = require("chai").assert;


describe("Proftis", function() {
    it("should have profit of 19", function() {
        var result = 19;
        var array = [2, 1, 3, 4, 10, 20];
        assert.equal(result, checkProfit(array));
    });

    it("should have no profit", function() {
        var result = -1;
        var array = [200, 1, 3, 4, 10, 20];
        assert.equal(result, checkProfit(array));
    });
    
});