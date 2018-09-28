hrmsApp.controller('seperationTypeCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getTypeList();
		$scope.setOptions();
		$scope.seperateById();
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
	

	// pagination
	$scope.maxSize = 5; // Limit number for pagination display number.
	$scope.totalCount = 0; // Total number of items in all pages. initialize as  a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 2; // Maximum number of items per page.

		  
	// Functionality for Get All
	
	$scope.getTypeList = function(){
		
		HrmsService.seperationTypePagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.getSepList = response.result;
			console.log($scope.getSepList);
			$('.disabledDrop').attr('disabled', true)
			$scope.totalCount = response.count;
			console.log($scope.totalCount);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
    // Loading employees list on first time
	$scope.getTypeList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getTypeList();
	};


	// Functionality for Advanced search
	
	$scope.seperateAdvance = function(search){
		$scope.search=search;
		debugger;
		HrmsService.seperationSearch($scope.search).then(function(data){
			$scope.typeSearch = data.result;
			console.log($scope.typeSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.seperatePost = function(){
		$scope.seperateObj = {
				"seperationTypeName":$scope.postSeperate.seperationTypeName
		}
		debugger;
		HrmsService.seperationTypePost($scope.seperateObj).then(function(data){
			$scope.postSeperate = data.result;
			console.log($scope.postSeperate);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("seperationTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.seperateById = function(){
		debugger;
		HrmsService.seperatationGetById($stateParams.seperateId).then(function(data){
			$scope.typeGetList = data.result;
			console.log($scope.typeGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.seperateEdit = function(){
		$scope.typeObj = {
				"id":$stateParams.seperateId,
				"seperationTypeName":$scope.typeGetList.seperationTypeName
			}
		debugger;
		HrmsService.seperationTypeEdit($scope.typeObj).then(function(data){
			$scope.seperateEditList = data.result;
			console.log($scope.seperateEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("seperationTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.seperateDelete = function(id){
		HrmsService.seperationTypeDelete(id).then(function(data){
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
				$state.go("seperationTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
}]);