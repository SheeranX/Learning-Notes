(function(){
	'use strict';
	var url = ' http://www.baidu.com';
	var order = $resource(url,{},{
       getWeatherForecast:{
	   	method:'get',
		url:url,
		isArray:true
	   }			
	});
	return {
	   getWeatherForecast:function(para1,para2,para3){
            var model = order.getWeatherForecast({
			    pub:para1,
				servicepage:para2,
				culture:para3
			}).$promise;   	
			return model;
	   }
	}
})();
