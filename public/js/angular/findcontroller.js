var myApp = angular.module("findApp", []);
myApp.controller("FindAppController", ["$scope", "$http", function($scope, $http) {
		$scope.wines = [];
		$scope.position = 0;
		$http.get("http://localhost:4000/api/wines")
			.then(function(res) {
				$scope.wines = res.data;
			}, function(res) {
				$scope.wines = [{name: "Error!!" + res.status}];
			});
		}]
	);
myApp.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});
