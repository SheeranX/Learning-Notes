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
  $scope.content =[];
  $scope.localstorage = window.localStorage;
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
          $scope.result  = response.data;
          //Brower's localStorage is available
          if(judge())
            $scope.localstorage.setItem("sheeran", addStorage($scope.content));
          else{
         //  if ($scope.localstorage.getItem("sheeran").indexOf()) {}
            $scope.localstorage.setItem("sheeran", addStorage(getStorage()));
          }
          // $scope.localstorage.setItem("sheeran", $scope.content.push($scope.txtContent));
           //$scope.storage = $scope.localstorage.getItem("sheeran");
        });
      }}

  $scope.history = function(){
   // alert("000");
    if(judge())
      $scope.his = false;
    else{
       $scope.hisContent = $scope.localstorage.getItem("sheeran").split(",");
       $scope.his = true;
    }
     
    }
    

      $scope.convert = function(n){return $sce.trustAsHtml(n+"...");} 

      function addStorage (arr){
            arr.push($scope.txtContent);
            return arr.toString();
      }

      function getStorage(){
        if(judge())
          return ;
        if($scope.localstorage.getItem("sheeran").indexOf($scope.txtContent)<0)
          return  $scope.localstorage.getItem("sheeran").split(",");
        else
          return ;
      }

      function judge(){
        if ($scope.localstorage.getItem("sheeran")==null||$scope.localstorage.getItem("sheeran")=="")
          return true;
        else
          return false;
      }

}]);
