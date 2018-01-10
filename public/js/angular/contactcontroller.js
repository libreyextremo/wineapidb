var myAppContact = angular.module("contactApp", []);
myAppContact.controller("ContactAppController", ["$scope", function($scope, $http) {
      $scope.position = 0;
		}]
	);
myAppContact.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});
