(function() {
	'use strict';

	angular.module('MaterialApp', ['ngMaterial'])
		.controller('MaterialCtrl', ['$scope', function($scope) {
			$scope.hello = 'hello';
		}])
		.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
			$scope.alert = '';
			$scope.showListBottomSheet = function($event) {
				$scope.alert = '';
				$mdBottomSheet.show({
					templateUrl: 'template/bottom-sheet-list-template.html',
					controller: 'ListBottomSheetCtrl',
					targetEvent: $event
				}).then(function(clickedItem) {
					$scope.alert = clickedItem.name + ' clicked!';
				});
			};
			$scope.showGridBottomSheet = function($event) {
				$scope.alert = '';
				$mdBottomSheet.show({
					templateUrl: 'template/bottom-sheet-grid-template.html',
					controller: 'GridBottomSheetCtrl',
					targetEvent: $event
				}).then(function(clickedItem) {
					$scope.alert = clickedItem.name + ' clicked!';
				});
			};
		})
		.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
			$scope.items = [{
				name: 'Share',
				icon: 'share'
			}, {
				name: 'Upload',
				icon: 'upload'
			}, {
				name: 'Copy',
				icon: 'copy'
			}, {
				name: 'Print this page',
				icon: 'print'
			}, ];
			$scope.listItemClick = function($index) {
				var clickedItem = $scope.items[$index];
				$mdBottomSheet.hide(clickedItem);
			};
		})
		.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
			$scope.items = [{
				name: 'Hangout',
				icon: 'hangout'
			}, {
				name: 'Mail',
				icon: 'mail'
			}, {
				name: 'Message',
				icon: 'message'
			}, {
				name: 'Copy',
				icon: 'copy'
			}, {
				name: 'Facebook',
				icon: 'facebook'
			}, {
				name: 'Twitter',
				icon: 'twitter'
			}, ];
			$scope.listItemClick = function($index) {
				var clickedItem = $scope.items[$index];
				$mdBottomSheet.hide(clickedItem);
			};
		})
		.controller('AppCtrl', function($scope, $mdDialog) {
			$scope.alert = '';
			$scope.showAlert = function(ev) {
				$mdDialog.show(
					$mdDialog.alert()
					.title('This is an alert title')
					.content('You can specify some description text in here.')
					.ariaLabel('Password notification')
					.ok('Got it!')
					.targetEvent(ev)
				);
			};
			$scope.showConfirm = function(ev) {
				var confirm = $mdDialog.confirm()
					.title('Would you like to delete your debt?')
					.content('All of the banks have agreed to forgive you your debts.')
					.ariaLabel('Lucky day')
					.ok('Please do it!')
					.cancel('Sounds like a scam')
					.targetEvent(ev);
				$mdDialog.show(confirm).then(function() {
					$scope.alert = 'You decided to get rid of your debt.';
				}, function() {
					$scope.alert = 'You decided to keep your debt.';
				});
			};
			$scope.showAdvanced = function(ev) {
				$mdDialog.show({
						controller: DialogController,
						templateUrl: 'template/dialog1.tmpl.html',
						targetEvent: ev,
					})
					.then(function(answer) {
						$scope.alert = 'You said the information was "' + answer + '".';
					}, function() {
						$scope.alert = 'You cancelled the dialog.';
					});
			};
		});

	function DialogController($scope, $mdDialog) {
		$scope.hide = function() {
			$mdDialog.hide();
		};
		$scope.cancel = function() {
			$mdDialog.cancel();
		};
		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	};
})();