// var app = angular.module("app",["ctrl",'ngRoute']);
// app.config(function($routeProvider){
// 	$routeProvider.when('/hello',{
// 		templateUrl :'sub1.html',
// 		controller:'helloCtrl'
// 	}).when('/list',{
// 		templateUrl:'sub2.tml',
// 		controller:'howCtrl'
// 	}).otherwise({
// 		redirectTo:'/hello'
// 	});
// });

var app = angular.module('app', ["ctrl",'ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when("/hello",{
		templateUrl:'sub1.html',
		controller:'helloCtrl'
	}).when("/how",{
		templateUrl:"sub2.html",
		controller:'howCtrl'
	}).otherwise({
		redirectTo:'/hello'
	});
}]);