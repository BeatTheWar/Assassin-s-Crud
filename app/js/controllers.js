'use strict';

/* Controllers */

var crud = angular.module('myApp.controllers', []);

crud.controller('MyCtrl1', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });
    
    $scope.orderProp = 'age';
    $scope.layout = 'grid';
})

crud.controller('MyCtrl2', ['$scope', function($scope) {

}])

crud.controller('detailCtrl', function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
})