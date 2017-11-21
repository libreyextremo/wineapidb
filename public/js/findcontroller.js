angular
	.module("findApp", [])
	.controller("FindAppController", ["$scope", "$http", function($scope, $http) {
		$scope.wines = [];
		$scope.position = 0;
		$http.get("http://localhost:4000/api/wines")
			.then(function(res) {
				$scope.wines = res.data;
				console.log($scope.wines.length);
			}, function(res) {
				$scope.wines = [{name: "Error!!" + res.status}];
			});
			
	}]
);