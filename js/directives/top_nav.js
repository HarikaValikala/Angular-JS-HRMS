angular.module('myApp').directive('topDir',function(){
	return{
		templateUrl : 'partials/top_nav.html',
		restrict : 'E',
		replace : true,
		scope : {
		}
	}
})