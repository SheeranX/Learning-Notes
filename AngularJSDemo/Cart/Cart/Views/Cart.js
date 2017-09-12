//alert("---");
angular.module('app', [])
	   .controller('ctrl', ['$scope', '$http', function ($scope, $http) {
	       $scope.goods = {};
	   	  //$scope.goods=[
	   	  //	{id:'g0001',name:"Sheeran",num:2,imgUrl:'taylor_1.jpg',description:'the singer song-writer',price:12},
	   	  //	{id:'g0002',name:"Taylor",num:5,imgUrl:'taylor_1.jpg',description:'my favorite female singer',price:13},
	   	  //	{id:'g0003',name:"Coldplay",num:4,imgUrl:'taylor_1.jpg',description:'Not a band but artist',price:14}
	       //];

	       $http.get("/api/Cart").then(function (res) {
	           $scope.goods = res.data;
	           getTotal();
	       });

	       $scope.total = 0;
	       var getTotal = function () {
	           for (var i = 0; i < $scope.goods.length; i++) {
	               var item = $scope.goods[i];
	               $scope.total += item.Quantity * item.Price;
	           }
	       }

	       $scope.plus = function (index) {
	           $scope.goods[index].Quantity++;
	           getTotal();
          };

	       $scope.minus = function (index) {
	           if ($scope.goods[index].Quantity < 2)
	               return;
	           else {
	               $scope.goods[index].Quantity--;
	               getTotal();
	           }
                   
          };

          //$scope.total = function(){
          //	var sum = 0;
          //	angular.forEach($scope.goods, function(item, index,array){
          //		sum+=item.num*item.price;
          //	});
          //	return sum;
          //};

	   }]);