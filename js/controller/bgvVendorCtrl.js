hrmsApp.controller('bgvVendorCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getBgvVAllList();
		$scope.setOptions();
		$scope.bgvVById();
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
	
	$scope.getBgvVAllList = function(){
		debugger;
		HrmsService.bgvVendorPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.bgvVList = response.result;
			console.log($scope.bgvVList);
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
	$scope.getBgvVAllList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getBgvVAllList();
	};

	
	// Functionality for Advanced search
	
	$scope.bgvVAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.bgvVendorSearch($scope.search).then(function(data){
			$scope.bgvVSearch = data.result;
			console.log($scope.bgvVSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.bgvVPost = function(){
		$scope.bgvVObj={
				 "vendor":$scope.postBgvV.vendor
		}
		debugger;
		HrmsService.bgvVendorPost($scope.bgvVObj).then(function(data){
			$scope.postBgvV = data.result;
			console.log($scope.postBgvV);
			$scope.status = data.status;
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("bgvVendorTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.bgvVById = function(){
		debugger;
		HrmsService.bgvVendorGetById($stateParams.bgvVId).then(function(data){
			$scope.bgvVGetList = data.result;
			console.log($scope.bgvVGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.bgvVEdit = function(){
		$scope.bgvVenObj={
				 "id":$stateParams.bgvVId,
				 "vendor":$scope.bgvVGetList.vendor
		}
		debugger;
		HrmsService.bgvVendorEdit($scope.bgvVenObj).then(function(data){
			$scope.bgvVEditList = data.result;
			console.log($scope.bgvVEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("bgvVendorTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.bgvVDelete = function(){
		HrmsService.bgvVendorRowDelete(id).then(function(data){
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
				$state.go("bgvVendorTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);