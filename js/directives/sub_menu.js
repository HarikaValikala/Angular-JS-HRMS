angular.module('myApp').directive('subMenu',function(){
	return{
		templateUrl : 'partials/sub_menu.html',
		restrict : 'E',
		replace : true,
		scope : {
		}
	}
})