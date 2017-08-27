var app = angular.module('app', [])

app.controller('ctrl', ['$scope', function ($scope) {

    var count = 0;
    var overlap = false;

    var arr = new Array();         //先声明一维
       for(var i=0;i<3;i++){          //一维长度为3
          arr[i]=new Array();    //在声明二维
          for(var j=0;j<3;j++){      //二维长度为3
             arr[i][j]=1;
       }
	}
    //var array = [{1,1},{1,2}];
    //console.log(array);
    $scope.express = [];

    $scope.tdclick = function (x,y,z) {

        forAddClass(x);
     //   alert(y+z);
        arr[y][z];

        if (overlap)
        	return false;

        if (count>8)
        	return false;

         console.log(count);

        if (count==5)
			forCompare($scope.express);
		//if (count==6){}
        forComputer(x);
        //twoArray(x,y);
    };
    
    function forAddClass(y) {

        var ele = document.getElementById(y).children[0];//通过children[0] 得到span

        if (ele.getAttribute("class") === "glyphicon glyphicon-remove wrong" || ele.getAttribute("class") === "fa fa-circle-o circle")
        {
        	 overlap = true;
        	 return false;
        }
        else
        {
        	 if (count % 2 > 0) 
                ele.setAttribute("class", "glyphicon glyphicon-remove wang");
             else
                ele.setAttribute("class", "fa fa-circle-o circle");

            overlap = false;
            forAddExpress(y);
            count++;

        }
    }

    function forAddExpress(para) {

        var str = $scope.express.join('');


        if (str.indexOf(para) != -1)

            return false;

        else

            $scope.express.push(para);

    }

    function forCompare(arr) {
    	var arrPlayer =forConvert(getPlayer($scope.express));
    	console.log(arrPlayer);
    	if ((arrPlayer[2]-arrPlayer[1])==(arrPlayer[3]-arrPlayer[2])) {
    		alert("win");
    	}
    }

    function forComputer(x) {

        var n = Math.floor(Math.random() * 9+1);

        var para = 'A'+n;

        if (contains($scope.express,para))
            forComputer(x);
        else {

            forAddClass(para);
        }

        console.log(count);

    }

    function forConvert(arr) {

        var str = arr.join('');

        var arr1 = str.split("A");
        return arr1;

    }
// prototype test
    Array.prototype.contains = function(obj){
    	var i = this.length;
    	while(i--){
    		if (this[i]===obj) {
    			return true;
    		}
    	}
    	return false;
    }

    function contains(arr, obj) {  
    var i = arr.length;  
    while (i--) {  
        if (arr[i] === obj) {  
            return true;  
        }  
    }  
    return false;  
}
    
    function getPlayer(arr){
    	var i = arr.length;
    	var array=[];
    	for(var j=0;j<i+1;j++){
    		if (j%2==0) {
    			array.push(arr[j]);
    		}
    	}
    	//console.log(array);
    	return array;
    }  
   function twoArray(x,y){
   	for (var i = 0; i < 3; i++) {
   		for (var j = 0; j < 3; i++) {
   			model[i][j]=true;
   		}
   	}
   }


   

}]);
