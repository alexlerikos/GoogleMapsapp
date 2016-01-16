// rounts.js

var mongoose = require('mongoose');
var User     = require('./model.js');

// Open app routes

module.exports = function(app) {

	// GET Routes
	//---------------------
	//Retrieve records for user in the mongo

	app.get('/Users',function(req,res){

		// Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({})

        query.exec(function(err, users){
            if(err){
                res.send(err);
            }
            // If no errors are found, it responds with a JSON of all users
            res.json(users);
            
        });
	});

	// POST Routes
	//--------------------------
	//Provides methods for saving new users to the mongo

    app.post('/users', function(req, res){

        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newuser = new User(req.body);

        // New User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of the new user
            res.json(req.body);
        });
    });


};
