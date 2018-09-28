hrmsApp.controller('bgvOwnerCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getBgvOAllList();
		$scope.setOptions();
		$scope.bgvOById();
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
	
	$scope.getBgvOAllList = function(){
		debugger;
		HrmsService.bgvOwnerPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.bgvOList = response.result;
			console.log($scope.bgvOList);
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
	$scope.getBgvOAllList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getBgvOAllList();
	};

	
	// Functionality for Advanced search
	
	$scope.bgvOAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.bgvOwnerSearch($scope.search).then(function(data){
			$scope.bgvSearch = data.result;
			console.log($scope.bgvSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.bgvOPost = function(){
		$scope.bgvObj={
			"owner":$scope.postBgv.owner
		}
		debugger;
		HrmsService.bgvOwnerPost($scope.bgvObj).then(function(data){
			$scope.postBgv = data.result;
			console.log($scope.postBgv);
			$scope.status = data.status;
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("bgvOwnerTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.bgvOById = function(){
		debugger;
		HrmsService.bgvOwnerGetById($stateParams.bgvOId).then(function(data){
			$scope.bgvGetList = data.result;
			console.log($scope.bgvGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.bgvOEdit = function(){
		$scope.bgvOwObj={
				 "id":$stateParams.bgvOId,
				 "owner":$scope.bgvGetList.owner
		}
		debugger;
		HrmsService.bgvOwnerEdit($scope.bgvOwObj).then(function(data){
			$scope.bgvEditList = data.result;
			console.log($scope.bgvEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("bgvOwnerTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.bgvODelete = function(){
		HrmsService.bgvOwnerRowDelete(id).then(function(data){
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
				$state.go("bgvOwnerTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);