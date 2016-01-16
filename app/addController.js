//addController.js
// Angular controller and module for adding users 

var addController = angular.module("addController",["geolocation"]);

addController.controller("addController", function($scope, $http,geolocation){

	// Initialize Variables
	// ---------------------------

	$scope.formData = {};
	var coords = {};
	var lat = 0;
	var long = 0;

	// Set intial coordinates to the center of the US 

	$scope.formData.latitude = 39.500;
	$scope.formData.longitude = -98.350;

	// Protocols
	//-----------------------------
	//Create a new user based on the form fields

	$scope.createUser = funciton(){

		//Get text box info

		var userData = {
			username: $scope.formData.gender,
			gender: $scope.formData.gender,
			age: $scope.formData.age,
            favlang: $scope.formData.favlang,
            location: [$scope.formData.longitude, $scope.formData.latitude],
            htmlverified: $scope.formData.htmlverified

		};

		$http.post('/users', userData)
			.success( function(data){

				//Once complete, clear the form except location

				$scope.formData.username = "";
				$scope.formData.gender = "";
				$scope.formData.age = "";
				$scope.formData.favlang = "";
			})
			.error(function(data){
				console.log("Error: "+ data);
			});
			
	};
});