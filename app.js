var app = angular.module("MainApp", ["ngRoute"]);




app.config(function ($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "/templates/home.html",
			controller: "homeController"

		})
		.when("/playlist", {
			templateUrl: "/templates/washington.html",
			controller: "washingtonController"
		})
		.when("/discover", {
			templateUrl: "/templates/oregon.html",
			controller: "oregonController"
		}).otherwise("/", {
			templateUrl: "/templates/home.html",
			controller: "homeController"

		})



});