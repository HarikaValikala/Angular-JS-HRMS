hrmsApp.controller('contractPeriodCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getAllList();
		$scope.setOptions();
		$scope.contractById();
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
	$scope.pageSizeSelected = 3; // Maximum number of items per page.

		  
	// Functionality for Get All
	
	$scope.getAllList = function(){
		debugger;
		HrmsService.contractPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.getListDetails = response.result;
			$scope.getList = response.result.contractPeriod;
			$scope.getDetails = response.result.periodFormat;
			$scope.gD=$scope.getList +$scope.getDetails ;
			console.log($scope.getListDetails);
			console.log($scope.getDetails);
			console.log($scope.gD);
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
	$scope.getAllList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getAllList();
	};


	// Functionality for Advanced search
	
	$scope.contractAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.contractSearch($scope.search).then(function(data){
			$scope.periodSearch = data.result;
			console.log($scope.periodSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.contractPost = function(){
		
		debugger;
		HrmsService.contractPeriodPost($scope.postContract).then(function(data){
			$scope.postCont= data.result;
			console.log($scope.postCont);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("contractPeriodTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.contractById = function(){
		debugger;
		HrmsService.contractGetById($stateParams.contractId).then(function(data){
			$scope.periodGetList = data.result;
			console.log($scope.periodGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.contractEdit = function(){
		/*$scope.periodObj = {
				"id":$stateParams.contractId,
				"contractPeriod":$scope.periodGetList.contractPeriod
			}*/
		debugger;
		HrmsService.contractPeriodEdit($stateParams.contractId,$scope.periodGetList).then(function(data){
			$scope.periodEditList = data.result;
			console.log($scope.periodEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("contractPeriodTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.contractDelete = function(id){
		HrmsService.contractPeriodDelete(id).then(function(data){
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
				$state.go("contractPeriodTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
}]);