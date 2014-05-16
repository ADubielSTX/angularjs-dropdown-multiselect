'use strict';

angular.module('exampleApp', [
'ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate',
'angularjs-dropdown-multiselect'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false);

	var staticPath ='/angularjs-dropdown-multiselect/';
	var appPathRoute ='/';
	var pagesPath =staticPath+'pages/';
	
	
	$routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});

	$routeProvider.otherwise({redirectTo: appPathRoute+'home'});
	
}]);