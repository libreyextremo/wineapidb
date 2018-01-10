var myAppAbout = angular.module("aboutApp", []);
myAppAbout.controller("AboutAppController", ["$scope", function($scope, $http) {
      $scope.position = 0;
		}]
	);
myAppAbout.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});
