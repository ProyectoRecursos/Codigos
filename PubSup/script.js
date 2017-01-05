var app = angular.module('myApp', []);

app.factory('UserChannel', function($rootScope) {
    var LOGGED_IN = 'loggedIn';

    var logIn = function(value) {
      $rootScope.$broadcast(LOGGED_IN, value);
    };

    var onLoggedIn = function($scope, callback) {
      $scope.$on(LOGGED_IN, function(event, value) {
          callback(value);
      });
    }

    return {
      logIn: logIn,
      onLoggedIn: onLoggedIn
    }
});

app.controller('FirstCtrl', function($scope, UserChannel){
  $scope.messages = [];

  ////////////////////////// SUB //////////////////////////
  var handleLoggedIn = function(value) {
    $scope.messages.push(value + ' en funcion');
  };

  UserChannel.onLoggedIn($scope, handleLoggedIn);

  ////////////////////////// PUB //////////////////////////
  $scope.logIn = function() {
    UserChannel.logIn('BOTON1');
  };
});

app.controller('SecondCtrl', function($scope, UserChannel){
  $scope.messages = [];

  ////////////////////////// SUB //////////////////////////
  var handleLoggedIn = function(value) {
    $scope.messages.push(value + ' en funcion');
  };

  UserChannel.onLoggedIn($scope, handleLoggedIn);

  ////////////////////////// PUB //////////////////////////
  $scope.logIn = function() {
    UserChannel.logIn('BOTON2');
  };
})
