hrmsApp.controller('projectStatusCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getList();
		$scope.statusById();
		$scope.setOptions();
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
	$scope.pageSizeSelected = 4; // Maximum number of items per page.

		  
	// Functionality for Get All
	
	$scope.getList = function(){
		debugger;
		HrmsService.statusPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.statusList = response.result;
			console.log($scope.statusList);
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
	$scope.getList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getList();
	};

	// Functionality for Advanced search
	
	$scope.statusAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.statusSearch($scope.search).then(function(data){
			$scope.proStatusSearch = data.result;
			console.log($scope.proStatusSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.statusPost = function(){
		$scope.statusObj = {
				"status":$scope.postStatus.status
		}
		debugger;
		HrmsService.projectStatusPost($scope.statusObj).then(function(data){
			$scope.postStatus = data.result;
			console.log($scope.postStatus);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("projectStatusTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.statusById = function(){
		debugger;
		HrmsService.statusGetById($stateParams.statusId).then(function(data){
			$scope.statusGetList = data.result;
			console.log($scope.statusGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.statusEdit = function(){
		$scope.ProObj = {
				 "id": $stateParams.statusId,
				"status":$scope.statusGetList.status
		}
		debugger;
		HrmsService.projectStatusEdit($scope.ProObj).then(function(data){
			$scope.statusEditList = data.result;
			console.log($scope.statusEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("projectStatusTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.statusDelete = function(id){
		HrmsService.projectStatusDelete(id).then(function(data){
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
			}else{
				toastr.error($scope.errorMessage);
	       } 
			$state.go("projectStatusTable");
		})
	};
	
}]);