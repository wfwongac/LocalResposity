var app = angular.module('myapp', ['ngRoute']);

app.config(function($routeProvider){		// routeProivder come from ngRoute
	// In console page : we can use 'document.location.hash' to check location 
	// and "document.location.hash = '/anotherPage'" to go to another page
	$routeProvider
	.when('/', {
		//template: 'Welcome user!'
		templateUrl: 'login.html'
	})
	.when('/dashboard', {
		//template: 'Welcome user, again!'
		resolve: {
			"check": function($location, $rootScope){
				if(!$rootScope.loggedIn){
					$location.path('/');
				} 
				//else {
				//	templateUrl: 'dashboard.html'
				//}
			},
			templateUrl: 'dashboard.html'
		}
		
	})

	.otherwise({
		redirectTo: '/'
	});

});

app.controller('loginCtrl', function($scope, $location, $rootScope){
	$scope.submit = function(){
		// $rootScope 	<-- element in it can be used crossing diff. Controller
		
		//var uname = $scope.username;	
		//var password = $scope.password;
		if($scope.username == 'admin' && $scope.password == 'admin'){
			//$rootScope.uname = $scope.username; 
			//$rootScope.password = $scope.password;
			$rootScope.loggedIn = true;
			$location.path('/dashboard');		// < -- equal to -- window.location.hash = '#/dashboard';
		}else{
			alert('Wrong Stuff');
		}
	};
});