hrmsApp.controller('contactTypeCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getContList();
		$scope.setOptions();
		$scope.contById();
	})
	
	
	//Error Message Functionality
	
	$scope.setOptions = function() {
	    toastr.options.positionClass = "toast-top-center";
	   
	    toastr.options.closeButton = true;
	    toastr.options.showMethod = 'slideDown';
	    toastr.options.hideMethod = 'slideUp';
	    //toastr.options.newestOnTop = false;
	    toastr.options.progressBar = true;
	  };
	

/*	// pagination
	$scope.maxSize = 5; // Limit number for pagination display number.
	$scope.totalCount = 0; // Total number of items in all pages. initialize as  a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 4; // Maximum number of items per page.
*/
		  
	// Functionality for Get All
	
	$scope.getContList = function(){
		debugger;
		HrmsService.contTypeGetAll().then(function(data){
			$scope.contList = data.result;
			console.log($scope.contList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
   /* // Loading employees list on first time
	$scope.getallList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getallList();
	};
*/
	
// Functionality for Advanced search
	
	$scope.contactAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.contTypeSearch($scope.search).then(function(data){
			$scope.contSearch = data.result;
			console.log($scope.contSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	
	// Functionality for Post 
	
	$scope.contPost = function(){
		$scope.contObj = {
				"contactType":$scope.postCont.contactType

		}
		debugger;
		HrmsService.contTypePost($scope.contObj).then(function(data){
			$scope.postCont = data.result;
			console.log($scope.postCont);
			$scope.status = data.status;
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("contactTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.contById = function(){
		debugger;
		HrmsService.contTypeGetById($stateParams.contId).then(function(data){
			$scope.contGetList = data.result;
			console.log($scope.contGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.contEdit = function(){
		$scope.cTypeObj={
				 "id":$stateParams.contId,
				 "contactType":$scope.contGetList.contactType
		}
		debugger;
		HrmsService.contTypeEdit($scope.cTypeObj).then(function(data){
			$scope.contEditList = data.result;
			console.log($scope.contEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("contactTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.contDelete = function(){
		HrmsService.contTypeRowDelete(id).then(function(data){
			$scope.delRow = data.result;
			console.log($scope.delRow)
			$state.transitionTo($state.current, $stateParams, {
			    reload: true,
			    inherit: false,
			    notify: true
			});
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("contactTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);