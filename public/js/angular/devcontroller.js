var myAppDev = angular.module("devApp", []);
myAppDev.controller("DevAppController", ["$scope", function($scope, $http) {
      $scope.position = 0;
		}]
	);
myAppDev.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});
