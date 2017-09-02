// JavaScript source code
var app = angular.module("app", []);
// app.config(["$stateProvider",'$urlRouterProvider',function($stateProvider,$urlRouterProvider){
//  $urlRouterProvider.when('','/Search');
//  $stateProvider
//  .state('Search',{
//     url:'/Search',
//        templateUrl:'Search.html'    
//  })
//  .state("Result",{
//    url:'/Result',
//    templateUrl:'Result.html'
//  });
// }]);
app.factory('myIntercepter',['$rootScope',function($rootScope){
  return {
    request:function(config){
      $rootScope.load = false;
      $rootScope.resultShow = true;
      return config;
    },
    response:function(response){
      $rootScope.load = true;
      $rootScope.resultShow = false;
      return response;
}
}
}]);
app.config(["$httpProvider",function($httpProvider){ $httpProvider.interceptors.push("myIntercepter");
}]);
app.controller("ctrl", ["$scope", "$http","$rootScope","$sce", function ($scope, $http,$rootScope,$sce) {
  $rootScope.load = true;
  $scope.n = name;
  $rootScope.resultShow = false;
  //  $headers = {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
  //     'Content-Type': 'application/application/x-www-form-urlencoded',
  //     'Accept': 'application/json'
  // };
 // $scope.postUrl = $sce.trustAsUrl("http://en.wikipedia.org/w/api.php?action=query&list=search&srwhat=text&srsearch="+$scope.txtContent+"&format=json");
  $scope.iconSearch = function () {
    if ($scope.txtContent==""||$scope.txtContent==null)   
      {
        return false;
      }else{
        $scope.trustUrl = $sce.trustAsResourceUrl("http://en.wikipedia.org/w/api.php?action=query&list=search&srwhat=text&srsearch="+$scope.txtContent+"&format=json");

        $http.jsonp($scope.trustUrl).then(function(response){
          $scope.result =response.data;
        });
      }}
      $scope.convert = function(n){return $sce.trustAsHtml(n+"...");}
}]);
