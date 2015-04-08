'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CVCtrl', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/modele.json').
      success(function(data, status, headers, config) {
        $scope.data = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  })
