// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl	: 'pages/inicio.html',
			controller 	: 'mainController'
		})
		.when('/menu1', {
			templateUrl : 'pages/menu1.html',
			controller 	: 'aboutController'
		})
		.when('/menu2', {
			templateUrl : 'pages/menu2.html',
			controller 	: 'contactController'
		})
		.otherwise({
			redirectTo: '/'
		});
});


angularRoutingApp.controller('mainController', function($scope) {
	$scope.message = 'Modulos';
});

angularRoutingApp.controller('aboutController', function($scope) {
	$scope.message = 'Menu 1';
});

angularRoutingApp.controller('contactController', function($scope) {
	$scope.message = 'Menu 2';
});
