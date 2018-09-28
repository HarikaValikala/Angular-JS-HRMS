angular.module('myApp').directive('sideDir',function(){
	return{
		templateUrl : 'partials/side_nav.html',
		restrict : 'E',
		replace : true,
		scope : {
		}
	}
})