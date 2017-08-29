// JavaScript source code
var app = angular.module("app", ['ui.router']);
app.config(["$stateProvider",'$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when('','/Search');
	$stateProvider
	.state('Search',{
	   url:'/Search',
       templateUrl:'Search.html'	   
	})
	.state("Result",{
		url:'/Result',
		templateUrl:'Result.html'
	});
}]);
 app.controller("ctrl", ["$scope", "$http", function ($scope, $http) {
     $scope.iconSearch = function () {
         $http.get("").then();
         alert($scope.txtContent);
     }
 }]);
