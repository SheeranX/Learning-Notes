var app = angular.module('app', ['ngAnimate']);
app.factory('myHttpInterceptor', ['$rootScope', function($rootScope){
	return {
		request:function(config){
			$rootScope.load = true;
			return config;
		},
		response:function(response){
			$rootScope.load = false;
			return response;
		}
	};
}]);

app.config(['$httpProvider',function($httpProvider) {
	$httpProvider.interceptors.push("myHttpInterceptor");
}]);

app.controller('ctrl', ['$scope','$http', function($scope,$http){

	    $scope.w={};
		$scope.hide = true;
		$scope.tip = "More Details";
		$scope.longitude = "";
        $scope.ladtitude = "";

	var map = new BMap.Map("getMap");
    map.centerAndZoom("ningbo", 12);
    map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

    map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
    map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
    map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开

    var localSearch = new BMap.LocalSearch(map);
    localSearch.enableAutoViewport(); //允许自动调节窗体大小
	$scope.searchByStationName =function() {
    map.clearOverlays();//清空原来的标注
   // var keyword = document.getElementById("text_").value;
    localSearch.setSearchCompleteCallback(function (searchResult) {
        var poi = searchResult.getPoi(0);
        $scope.result = poi.point.lng + "," + poi.point.lat;
        map.centerAndZoom(poi.point, 13);

       // console.log();
        $scope.longitude = poi.point.lng;
        $scope.ladtitude = poi.point.lat;
        $scope.weatherAdd = poi.address;
        var marker = new BMap.Marker(new BMap.Point($scope.longitude, $scope.ladtitude));  // 创建标注，为要查询的地方对应的经纬度
        map.addOverlay(marker);
      // var content = document.getElementById("text_").value + "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
      // var infoWindow = new BMap.InfoWindow(<"p style='font-size:14px;'>" + $scope.result + "</p>");
        //marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

        var lgt = Math.floor($scope.longitude);
		var lati = Math.floor($scope.ladtitude);
		//console.log(lgt+lat);
		//console.log($scope.longitude+$scope.ladtitude);
		$http.get("https://fcc-weather-api.glitch.me/api/current?lat="+lati+"&lon="+lgt+"").then(function(response){
			$scope.w.weather= response.data.weather[0].main;
			$scope.w.iconimg = response.data.weather[0].icon;
			$scope.w.temper = response.data.main.temp;
			$scope.w.des = response.data.weather[0].description;	
			$scope.w.press = response.data.main.pressure;
			$scope.w.hum = response.data.main.humidity;
			$scope.w.win = response.data.wind.speed;
		});

console.log(lgt+lati);

		$scope.getMore = function(){
			$scope.hide = !$scope.hide;
			if (!$scope.hide)
			  $scope.tip= "Hide";
			  else 
			   $scope.tip = "More Details";
		 }	
    });
    localSearch.search($scope.address);
    //getWeather();


		
} 
	
}]);
