'use strict';



var app = angular.module("restaurantProAppApp", []);

app.controller("TasksCtrl", function($scope, $http) {
  $http.get('localhost:3000/tasks.json').
    success(function(data, status, headers, config) {
      $scope.tasks = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});


