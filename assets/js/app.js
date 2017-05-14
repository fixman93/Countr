var app = angular.module('myApp', ['ngRoute']);



app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
      }).
      when('/login', {
        templateUrl: 'templates/login.html',
      }).
      when('/product', {
        templateUrl: 'templates/product.html',
      }).
      
      
      otherwise({
        redirectTo: '/home'
      });
  }]);
