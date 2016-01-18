//model.js

// Pulls Mogodb dependencies for analyzing critera

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// User Schema

var UserSchema = new Schema({
	username: {type:String, required:true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    favlang: {type: String, required: true},
    location: {type: [Number], required: true}, // [Long, Lat]
    htmlverified: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});


//set created_at parameter to current time
UserSchema.pre('save', function(next){
	now = new Date();
	this.updated_at = now;
	if (!this.created_at){
		this.created_at = now;
	}
	next();
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
UserSchema.index({location: '2dsphere'});

module.exports = mongoose.model('User', UserSchema);

