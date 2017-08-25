// JavaScript source code

var app = angular.module('app', [])

app.controller('ctrl', ['$scope', function ($scope) {

    var count = 0;

    $scope.express = [];

    var array = ['A1','A2','A3','A4','A5','A6','A7','A8','A9'];

    //$scope.computer = [];

    $scope.tdclick = function (x) {

        //$scope.addClass="glyphicon glyphicon-remove";

        forAddClass(x);

        forAddExpress(x);

       // count++;

       

        forComputer(x);

     

        if (count === 5)

            forCompare($scope.express);

        //  alert(x);

        count++;

    };

    //if($scope.express.length>0)

    

    function forAddClass(y) {

        var ele = document.getElementById(y).children[0];//通过children[0] 得到span

        //var firstChildEles = ele.firstChild;

        if (ele.getAttribute("class") === "glyphicon glyphicon-remove" || ele.getAttribute("class") === "fa fa-circle-o")

            return false;

        if (count % 2 > 0)

            ele.setAttribute("class", "glyphicon glyphicon-remove");

        else

            ele.setAttribute("class", "fa fa-circle-o");

            //ele.setAttribute("class", "fa fa-circle-o");

        //alert('++');

    }

    //function forComAddClass(n) {

    //    var ele = document.getElementById(n).children[0];//通过children[0] 得到span

    //    //var firstChildEles = ele.firstChild;

    //    if (ele.getAttribute("class") === "fa fa-circle-o")

    //        return false;

    //    ele.setAttribute("class", "fa fa-circle-o");

    //}

    function forAddExpress(para) {

        var str = $scope.express.join('');

       // alert(str);

        if (str.indexOf(para) != -1)

            return false;

        else

            $scope.express.push(para);

    }

    function forCompare(arr) {

        var arr1 = forConvert(arr);

        if ((arr1[3] - arr1[1]) == (arr1[5] - arr1[3]))

            alert("-----");

    }

    function forComputer(x) {

        var n = Math.floor(Math.random() * 9+1);

        var para = 'A'+n;

        console.log(para);

        if (x === para)

            forComputer(x);

        else {

            forAddClass(x);

            forAddExpress(para);

            count++

        }

        console.log(count);

    }

    function forConvert(arr) {

        var str = arr.join('');

        var arr1 = str.split("A");

        return arr1;

    }

    

}]);


