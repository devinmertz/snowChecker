app = angular.module("MainApp")
.service("mammothService", function($http){
	
	var weatherDataUrl = "https://api.forecast.io/forecast/da1118e6aba215d2e0bc27f23bd88426/37.6307692,-119.032631?callback=JSON_CALLBACK";
	
	this.getWeather = function(){
		return $http.jsonp(weatherDataUrl).then(
		function(weatherResponse){
			return weatherResponse.data
		})
	} 
	
	
}); 