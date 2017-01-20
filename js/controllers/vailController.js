var app = angular.module("MainApp");

app.controller("vailController", ["$scope", "vailService", function ($scope, vailService) {
$scope.title = "Vail, CO";

$scope.scale;

$scope.getWeatherData = function () {
vailService.getWeather().then(
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
