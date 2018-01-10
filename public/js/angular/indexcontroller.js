var myAppIndex = angular.module("indexApp", []);
myAppIndex.controller("IndexAppController", ["$scope", function($scope, $http) {
      $scope.position = 0;
		}]
	);
myAppIndex.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});
