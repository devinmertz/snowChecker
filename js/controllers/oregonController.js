var app = angular.module("MainApp");

app.controller("oregonController", ["$scope", "orSnowService", function ($scope, orSnowService) {
$scope.title = "this is the oregon page";

$scope.scale;

$scope.getWeatherData = function () {
orSnowService.getWeather().then(
	function (weatherData) {
		$scope.weatherData = weatherData;
	}

)
}

$scope.degreeScales = [
{
	name: "Farenheit",
	symbol: "F",
	fahrRatio: function (fhTemp) {
		return fhTemp;
	}

		},

{
	name: "Celsius",
	symbol: "C",
	fahrRatio: function (fhTemp) {
		return (fhTemp - 32) * 5 / 9;
	}
		},

{
	name: "Kelvin",
	symbol: "K",
	fahrRatio: function (fhTemp) {
		return (fhTemp - 32) * 5 / 9 + 273.15;
	}
				}, ]



$scope.getWeatherData();


}])
