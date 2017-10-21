//alert("---");
 var app = angular.module('app', []);
     app.controller('ctrl', ctrl);
     //app.filter('numFilter',numFilter);

     // function numFilter(){
     //    return function(val){
     //      if(val<1)
     //        return 1;
     //    }
     // }
     var item = [
             {id:'g0001',name:"Sheeran",num:2,imgUrl:'taylor_1.jpg',description:'the singer song-writer',price:12},
             {id:'g0002',name:"Taylor",num:5,imgUrl:'taylor_1.jpg',description:'my favorite female singer',price:13},
             {id:'g0003',name:"Coldplay",num:4,imgUrl:'taylor_1.jpg',description:'Not a band but artist',price:14}
            ];
     function ctrl(){

           var vm = this;

           vm.goods="";

           vm.goods = item;
           vm.flag = false;
           vm.arr = [];

           vm.plus = plus;
           vm.minus = minus;
           vm.total = total;
           vm.delItems = delItems;
           vm.pay = pay;
           vm.selectItems = selectItems;
	   	     

          // vm.$watch('val',function(newVal){
          //    vm.val  = $filter('numFilter')(newVal);
          // });

          function plus(id){
          	angular.forEach(vm.goods,function(item,index,array){
          		if(item.id===id)
          		   item.num++;
          	});
          };

          function minus(id){
          	angular.forEach(vm.goods, function(item,index, array){
          		if(item.id===id)
              {
                if(item.num<2)
                  return;
                else
          			 item.num--;
              }
          	});
          };

          function total(){
          	var sum = 0;

            if(!vm.all)
              return sum = 0;
            if(vm.arr.length>0)
            {
              for(var i = 0;i<vm.arr.length;i++)
              {
                sum += (vm.goods[vm.arr[i]].price)*(vm.goods[vm.arr[i]].num);
                return sum;
              }
            }
          	angular.forEach(vm.goods, function(item, index,array){
          		sum+=item.num*item.price;
          	});
          	return sum;
          };

          function delItems(index){
              vm.goods.splice(index,1);
          }

          function pay(){
            alert(vm.total());
          }
       
          function selectItems(id){
            if(!vm.falg)
            {
              
            }
              if(vm.arr.length>0)
              {
                for(var i = 0;i<vm.arr.length;i++)
                {
                  if(vm.arr[i]==id)
                    return;
                  else
                    vm.arr.push(id);
                }
              }
              else
                vm.arr.push(id);
            console.log(vm.arr);
          }
          
	   };