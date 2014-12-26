(function  () {
	'use strict';

	angular.module('MaterialApp',['ngMaterial'])
		.controller('MaterialCtrl', ['$scope', function($scope){
			$scope.hello = 'hello';
		}]);
})();