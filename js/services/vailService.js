app = angular.module("MainApp")
.service("vailService", function($http){
	
	var weatherDataUrl = "https://api.forecast.io/forecast/da1118e6aba215d2e0bc27f23bd88426/39.6061,106.3550?callback=JSON_CALLBACK";
	
	this.getWeather = function(){
		return $http.jsonp(weatherDataUrl).then(
		function(weatherResponse){
			return weatherResponse.data
		})
	} 
	
	
}); 