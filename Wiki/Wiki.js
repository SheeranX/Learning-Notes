// JavaScript source code
var app = angular.module("app", []);
// app.config(["$stateProvider",'$urlRouterProvider',function($stateProvider,$urlRouterProvider){
// 	$urlRouterProvider.when('','/Search');
// 	$stateProvider
// 	.state('Search',{
// 	   url:'/Search',
//        templateUrl:'Search.html'	   
// 	})
// 	.state("Result",{
// 		url:'/Result',
// 		templateUrl:'Result.html'
// 	});
// }]);
 app.controller("ctrl", ["$scope", "$http", function ($scope, $http) {


     $scope.iconSearch = function () {
       if ($scope.txtContent==""||$scope.txtContent==null) {
 	 	     
 	   }

        alert($scope.txtContent);
     }
 }]);
