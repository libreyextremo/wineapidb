var myAppTerms = angular.module("termsApp", []);
myAppTerms.controller("TermsAppController", ["$scope", function($scope, $http) {
      $scope.position = 0;
		}]
	);
myAppTerms.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});
