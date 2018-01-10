var myAppPolicies = angular.module("policiesApp", []);
myAppPolicies.controller("PoliciesAppController", ["$scope", function($scope, $http) {
      $scope.position = 0;
		}]
	);
myAppPolicies.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});
