'use strict';


// Declare app level module which depends on filters, and services
var crud = angular.module('myApp', [
  'ui.bootstrap',
  'ngAnimate',  
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

crud.config(function($routeProvider) {
  $routeProvider
  	.when('/home', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'})
  	.when('/home/:phoneId', {templateUrl: 'partials/item-detail.html', controller: 'detailCtrl'})
  	.when('/about', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'})
  	.otherwise({redirectTo: '/home'});
});


