var luhn = require("../lib/index");
var assert = require("chai").assert;


describe("Check card number ", function() {
    it("should be true", function() {
        var array = [3,7,8,2,8,2,2,4,6,3,1,0,0,0,5];
        assert.isTrue(luhn(array));
    });

    it("should be true", function() {
        var array = [3,7,1,4,4,9,6,3,5,3,9,8,4,3,1];
        assert.isTrue(luhn(array));
    });
    
});