var app = angular.module("MainApp");

app.controller("homeController", ["$scope", function($scope){
	$scope.title = "this is the home page";
}])