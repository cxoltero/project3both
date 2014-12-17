'use strict';

/**
 * @ngdoc overview
 * @name restaurantProAppApp
 * @description
 * # restaurantProAppApp
 *
 * Main module of the application.
 */
angular
  .module('restaurantProAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'RecipesCtrl'
      })
      .when('/finance', {
        templateUrl: 'views/finance.html',
        controller: 'FinanceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
