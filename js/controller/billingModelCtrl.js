hrmsApp.controller('billingModelCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getallList();
		$scope.setOptions();
		$scope.billingById();
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
	
	$scope.getallList = function(){
		debugger;
		HrmsService.billingPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.billingList = response.result;
			console.log($scope.billingList);
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
	$scope.getallList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getallList();
	};

	
	// Functionality for Advanced search
	
	$scope.billAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.billingSearch($scope.search).then(function(data){
			$scope.billSearch = data.result;
			console.log($scope.billSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.billingPost = function(){
		$scope.modelObj={
					"modeOfBilling":$scope.postModel.modeOfBilling
		}
		debugger;
		HrmsService.billingModelPost($scope.modelObj).then(function(data){
			$scope.postModel = data.result;
			console.log($scope.postModel);
			$scope.status = data.status;
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("billingModelTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.billingById = function(){
		debugger;
		HrmsService.billingGetById($stateParams.modelId).then(function(data){
			$scope.modelGetList = data.result;
			console.log($scope.modelGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.billingEdit = function(){
		$scope.billObj={
				 "id":$stateParams.modelId,
				 "modeOfBilling":$scope.modelGetList.modeOfBilling
		}
		debugger;
		HrmsService.billingModelEdit($scope.billObj).then(function(data){
			$scope.billingEditList = data.result;
			console.log($scope.billingEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("billingModelTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.billingDelete = function(){
		HrmsService.billingRowDelete(id).then(function(data){
			$scope.modelRow = data.result;
			console.log($scope.modelRow)
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
				$state.go("billingModelTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);