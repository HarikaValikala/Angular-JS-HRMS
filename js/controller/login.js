 /*hrmsApp.controller("loginCtrl",['$scope','$state','HrmsService',function($scope,$state,HrmsService){
     $scope.login_fun = function(){
    	 debugger;
    	 var login= "username=" + $scope.username + "&password=" + $scope.password;
     HrmsService.login_auth(login).then(function(data){
    	 debugger;
       $scope.result = data;
         $state.go("costCenterTable"); 
         console.log($scope.result);
   },
    function(err){
        if(err){
            $scope.errorMessage = err;
      }else{
             $scope.errorMessage = err;
         }
    })
 }
}])*/


angular.module("myApp").controller("loginCtrl", function($scope,$rootScope,$state,UserService) {

    $scope.rememberMe = false;

    $scope.login_fun = function () {
    	debugger;
        UserService.authenticate($.param({ username: $scope.username,password: $scope.password }),function (authenticationResult) {
            var access = authenticationResult;
            $scope.error_msg = access.errorMessage;
            console.log(access.user.name);
           if(access.user.name == "user")
        	   {
        	         $state.go("costCenterTable");
        	         alert( "success");
        	}
        	    else{
        	          alert("ur credentials are wrong");
        	    	 
        	} 
           
            var accessToken = authenticationResult.token;
            $rootScope.accessToken = accessToken;
            if ($scope.rememberMe) {
                $cookieStore.put('accessToken', accessToken);
            }
            UserService.get(function (user) {
            	debugger;
                $rootScope.user = user;
               
                console.log(authenticationResult); 
                console.log($rootScope.user);
                $scope.userObject = authenticationResult.user;	
            
                var uId = $scope.userObject.id;
               
               /*localStorage.setItem('uId', $scope.userObject.id);
                
                localStorage.setItem('user', $scope.user.roles.ROLE_USER);
                localStorage.setItem('admin',$scope.user.roles.ROLE_ADMIN);*/
                if($scope.user.roles.ROLE_USER == true){
                	$state.go('costCenterTable');
                }
 
                /*if($scope.user.roles.ROLE_ADMIN == true){
                	$state.go('adminDashboard');
                }
                else if($scope.user.roles.ROLE_USER == true){ 
                $state.go('userTiles');  
                }
                else {
                		alert("Please Register");
                }*/
            });
        });
    }
})