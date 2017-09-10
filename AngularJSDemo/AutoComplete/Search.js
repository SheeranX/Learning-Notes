//alert("---");

// angular.module('app', [])
//        .controller('ctrl', ['$scope', function($scope){
//        	  $scope.selected = ["Sheeran","Taylor","ColdPlay"];
//        }])
var blogModule = angular.module('blogModule', [ngResource]);
    
    blogModule.factory('BlogResource', ['$resource', 
    	function($resource){
	    	return $resource(serverUrl+"/api/blog/:id", {}, {
	    		get:{method:'GET',cache:false,isArray:false},
	    		save:{method:'POST',cache:false,isArray:false},
	    		update:{method:'PUT',cache:false,isArray:false},
	    		delete:{method:"DELETE",cache:false,isArray:false}
	    	});
    }]);

    blogModule.controller('BlogListCtrl', ['$scope','BlogResource', 
    	function($scope,BlogResource){
    		BlogResource.get({},function(response){
    			$scope.blogList = response;
    		},function(error){
    			console.log("Error:"+JSON.stringify(error));
    		});
    }]);


    // var CreditCard = $resource('/user/:userId/card/:cardId', {userId:123,cardId:'@Id'}, {charge:{method:'POST',params:{charge:true}}});

    // var cards = CreditCard.query(function(){
    // 	var card  = cards[0];

    // 	except(card instanceof CreditCard).toEqual(true);
    // 	card.name = 'J.Smith';
    // 	card.$save();
    // });

    