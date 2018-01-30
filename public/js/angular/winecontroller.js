var myApp = angular.module("wineApp", []);
myApp.controller("WineAppController", ["$scope", "$http", function($scope, $http) {
		$scope.wine = {
			  _id: '5a5671c9007b7026c89f00ef',
			  API_id: '1',
			  API_winename: 'Finca Antigua Tempranillo',
			  API_description: 'Red wine Barrel. 6 months in American oak barrels.',
			  API_characteristics: 'Finca Antigua Tempranillo is a red wine from D.O. La Mancha produced by Finca Antigua.This wine is a single-variety of Tempranillo (100%). The grapes to make this wine were harvested the second week of September. Regarding the vinification, the grapes fermented in stainless steel deposits with temperature control, and then they were macerated for 19 days. Lastly, the wine was aged for 8 months in American oak barrels.',
			  API_denomination_of_origen: 'D.O. La Mancha',
			  API_winery: 'Finca Antigua',
			  API_variety: 'Tempranillo',
			  API_volume: '75 cl.',
			  API_alcohol: '14.0%',
			  API_serve: '16ºC',
			  API_rating: 90,
			  API_rating_entity: 'W.O.',
			  API_price: 6.3,
			  API_price_currency: '€',
			  API_url_picture: 'wine_1.jpg',
			  __v: 0
			};
		$scope.idwine = QueryString.id;
		$http.get("http://localhost:4000/api/wine?id=" + $scope.idwine)
			.then(function(res) {
				$scope.wine = res.data;
			}, function(res) {
				console.log("Error!!" + res.status);
			});
		}]
	);
myApp.directive('bottom', function() {
  return {
    restrict: 'E',
		templateUrl: 'bottom.html'
  };
});

//read get parameters
var QueryString = function () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();
