'use strict';

/**
 * @ngdoc function
 * @name restaurantProAppApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the restaurantProAppApp
 */
angular.module('restaurantProAppApp')
  .controller('NotesCtrl', function ($scope, $http) {
    var notesAPI = {};

    notesAPI.getTitles = function() {
      return $http({
        method: 'JSONP', 
        url: 'localhost:3000/notes'
      });
    }

    return notesAPI;
  });




