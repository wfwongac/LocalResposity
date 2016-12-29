var app = angular.modelu('mainApp', []);

app.controller('people', function($scope, $http){
	$http.get('http://127.0.0.1/AngularJS_tutorials/database.json');

});