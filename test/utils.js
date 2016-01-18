'use strict'

var mongoose = require("mongoose");
var uri = 'mongodb://localhost/test'

// Clear database before testing

beforeEach(function(done){

	function clearDB(){
		for(var i in mongoose.connection.collections){
			mongoose.connection.collections[i].remove(function(){});
		}
		return done();
	}

	if (mongoose.connection.readyState === 0){
		mongoose.connect(uri, function(err){
			if (err){
				throw err;
			}
			return clearDB();
		});
	}
	else {
		return clearDB;
	}
});

afterEach(function (done){
	mongoose.disconnect();
});

