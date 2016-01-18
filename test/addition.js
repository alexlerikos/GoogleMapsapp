'use strict';

// sample test case to test mocha setup

describe("addition", function(){
	it("should add 1+1 correctly", function(done){
		var onePlusOne = 1+1;
		onePlusOne.should.equal(2);
		// call done so mocha knows we're done
		// more useful for async tests
		done();
	});
});