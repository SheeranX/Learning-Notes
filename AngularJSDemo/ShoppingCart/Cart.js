//alert("---");
angular.module('app', [])
	   .controller('ctrl', ['$scope', function($scope){
	   	  $scope.goods=[
	   	  	{id:'g0001',name:"Sheeran",num:2,imgUrl:'taylor_1.jpg',description:'the singer song-writer',price:12},
	   	  	{id:'g0002',name:"Taylor",num:5,imgUrl:'taylor_1.jpg',description:'my favorite female singer',price:13},
	   	  	{id:'g0003',name:"Coldplay",num:4,imgUrl:'taylor_1.jpg',description:'Not a band but artist',price:14}
	   	  ];

          $scope.plus = function(id){
          	angular.forEach($scope.goods,function(item,index,array){
          		if(item.id===id)
          			item.num++;
          	});
          };

          $scope.minus = function(id){
          	angular.forEach($scope.goods, function(item,index, array){
          		if(item.id===id)
          			item.num--;
          	});
          };

          $scope.total = function(){
          	var sum = 0;
          	angular.forEach($scope.goods, function(item, index,array){
          		sum+=item.num*item.price;
          	});
          	return sum;
          };

          







	   }]);