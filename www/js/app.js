'use strict';

/* App Module */

var premiereApp = angular.module('premiereApp', [
    'ngRoute',
    'premiereAnimations',
    'premiereControllers',
    'premiereServices'
]);

premiereApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/teams', {
        templateUrl: 'partials/team-list.html',
        controller: 'TeamListCtrl'
      }).
      when('/teams/:teamId', {
        templateUrl: 'partials/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      otherwise({
        redirectTo: '/teams'
      });
  }]);
