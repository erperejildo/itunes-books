'use strict';

/**
 * @ngdoc function
 * @name itunesBooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itunesBooksApp
 */
angular.module('itunesBooksApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.selectAuthor = function(name) {
  		$scope.author = name;
  	};

  });
