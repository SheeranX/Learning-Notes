var app = angular.module('app', [])
app.controller('ctrl', ['$scope', function($scope){
	$scope.tdclick = function(x){
		//$scope.addClass="glyphicon glyphicon-remove";
		forAddClass(x);	
		alert(x);	
	};
	function forAddClass(y){
		var ele = document.getElementById(y).getElementsByTagName("span");
		//var firstChildEles = ele.firstChild;
		ele.setAttribute("class","glyphicon glyphicon-remove");

	}
}]);