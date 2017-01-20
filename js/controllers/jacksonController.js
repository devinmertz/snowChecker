var app = angular.module("MainApp");

app.controller("jacksonController", ["$scope", "jacksonService", function ($scope, jacksonService) {
$scope.title = "Jackson Hole, WY";

$scope.scale;

$scope.getWeatherData = function () {
jacksonService.getWeather().then(
	function (weatherData) {
		$scope.weatherData = weatherData;
		console.log(weatherData);
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