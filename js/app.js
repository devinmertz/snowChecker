var app = angular.module("MainApp", ["ngRoute"]);




app.config(function ($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "/templates/home.html",
			controller: "homeController"

		})
		.when("/mammoth", {
			templateUrl: "/templates/mammoth.html",
			controller: "mammothController"
		})
		.when("/vail", {
			templateUrl: "/templates/vail.html",
			controller: "vailController"
		})
		.when("/bachelor", {
			templateUrl: "/templates/bachelor.html",
			controller: "bachelorController"
		})
		.when("/meadows", {
			templateUrl: "/templates/meadows.html",
			controller: "meadowsController"
		})
		.when("/baker", {
			templateUrl: "/templates/baker.html",
			controller: "bakerController"
		})
		.when("/jackson", {
			templateUrl: "/templates/jackson.html",
			controller: "jacksonController"
		})
		.otherwise("/", {
			templateUrl: "/templates/home.html",
			controller: "homeController"

		})



});