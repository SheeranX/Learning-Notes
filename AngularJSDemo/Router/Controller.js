var ctrl = angular.module("ctrl",[]);
ctrl.controller("helloCtrl",["$scope",
		function($scope){
			$scope.greeting = {
				text:"hello"
			};
		}
	]);
ctrl.controller("howCtrl",['$scope',
		function($scope){
			$scope.how = 'how';
		}
	]);


