//addController.js
// Angular controller and module for adding users 

var addController = angular.module("addController",["geolocation", "gservice"]);

addController.controller("addController", function($scope, $http,$rootScope, geolocation, gservice){

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
	//Get mouse click coordinates
	$rootScope.$on("clicked", function(){
		
		//run gservice functions associated with coordinates
		$scope.$apply(function(){
			$scope.formData.latitude = parseFloat(gservice.clicklat).toFixed(3);
			$scope.formData.longitude = parseFloat(gservice.clicklong).toFixed(3);
        	$scope.formData.htmlverified = "Nah but thanks for spamming my map!";
		});

	});

	//Create a new user based on the form fields
	$scope.createUser = function(){

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

				// refresh the map with dat new data
				gservice.refresh($scope.formData.latitude,$scope.formData.longitude);

			})
			.error(function(data){
				console.log("Error: "+ data);
			});
			
	};
});