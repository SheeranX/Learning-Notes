//alert("---");
angular.module('app', [])
	   .controller('ctrl', ['$scope', '$http', function ($scope, $http) {
	       $scope.goods = {};
	       $scope.chooseArr = [];
	       $scope.total = 0;
	       var flag = [];

	       $http.get("/api/Cart").then(function (res) {
	           $scope.goods = res.data;
	           getTotal();
	       });
           //calculator the total pay.
	       var getTotal = function () {
	           $scope.total = 0;
	           for (var i = 0; i < $scope.goods.length; i++) {
	               var item = $scope.goods[i];
	               $scope.total += item.Quantity * item.Price;

	           }
	       };
           //select all items , disable selected
	       $scope.setFlag = function () {
	           $scope.chooseArr = [];
	           if ($scope.all) {
	               flag = false;
	               getTotal();
	           }

	           else {
	               flag = true;
	               $scope.total = 0;
	           }
	               
	       }
           //add quantity 
	       $scope.plus = function (index) {
	          // $scope.total = 0;
	           $scope.goods[index].Quantity++;
	           getTotal();
          };
           //reduce quantity
	       $scope.minus = function (index) {
	           if ($scope.goods[index].Quantity < 2)
	               return;
	           else {
	             //  $scope.total = 0;
	               $scope.goods[index].Quantity--;
	               getTotal();
	           }
                   
	       };
           //delete items one by one
	       $scope.delItem = function (index) {
	           $scope.goods.splice(index,1);   
	       };
           //delete all items
	       $scope.delAll = function () {
	           if ($scope.all)
	           {
	               $scope.goods.splice(0, $scope.goods.length);
	               $scope.total = 0;
	           }
	       };
           //select items 
	       $scope.selected = function (status, index) {
	           if (!flag)
	               return;
	           if (status) {
	               forArr(index);
	               calTotal($scope.chooseArr);
	           }

	           else if (!status) {
	               if ($scope.chooseArr.length == 0)
	                   getTotal();
	               else {
	                   $scope.chooseArr.remove(index);
	                   calTotal($scope.chooseArr);
	               }

	           }
	           else
	               return;
	       };
           //calculator select items
	       function calTotal(arr) {
	           $scope.total = 0;
	           for (var i = 0; i < arr.length; i++) {
	               $scope.total += ($scope.goods[arr[i]].Price) * ($scope.goods[arr[i]].Quantity);
	           }
	       }
           //record the selected items
	       function forArr(index) {
	           if ($scope.chooseArr.length > 0) {
	               if ($scope.chooseArr.indexOf(index) > -1)
	                   return;
	               else
	                   $scope.chooseArr.push(index);
	           }
	           else {
	               $scope.chooseArr.push(index);
	           }
	           
	       }


	       Array.prototype.remove = function (val) {
	           var index = this.indexOf(val);
	           if (index > -1) {
	               this.splice(index, 1);
	           }
	       };
	   }]);