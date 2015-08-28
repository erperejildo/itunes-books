'use strict';

/**
 * @ngdoc function
 * @name itunesBooksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itunesBooksApp
 */
angular.module('itunesBooksApp')
  .controller('MainCtrl', function ($scope, $http) {

  	// for only one call for each author
  	$scope.bookArray = new Array();

  	$scope.selectAuthor = function(name) {
  		$scope.author = name;
  		$scope.books  = null;

  		if (!$scope.bookArray[name]) {
			var req = {
				method: 'GET',
				url: 'https://itunes.apple.com/search?country=gb&term=' + $scope.author + '&media=ebook&limit=10'
			}

			$http(req).then(function(response){
				// success
				$scope.error = false;
				$scope.books = response.data.results;
				$scope.bookArray[name] = response.data.results;
			}, function(){
				// error
				$scope.error = true;
			});
		} else {
			$scope.books = $scope.bookArray[name];
		}

  	};

  	// select the first author by default
  	$scope.selectAuthor('hemingway');

  	$scope.orderBy = 'trackName';
    $scope.predicate = true;
    // order data
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

  });
