hrmsApp.controller('leaveAllowedCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getLeavesList();
		$scope.setOptions();
		$scope.leavesById();
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
	

	/*// pagination
	$scope.maxSize = 5; // Limit number for pagination display number.
	$scope.totalCount = 0; // Total number of items in all pages. initialize as  a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 2; // Maximum number of items per page.
*/
		  
	// Functionality for Get All
	
	$scope.getLeavesList = function(){
		debugger;
		HrmsService.leavesGetAll(/*$scope.pageIndex, $scope.pageSizeSelected*/).then(function(response){
			$scope.leavesList = response.result;
			console.log($scope.leavesList);
			/*$('.disabledDrop').attr('disabled', true)
			$scope.totalCount = response.count;
			console.log($scope.totalCount);*/
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
    /*// Loading employees list on first time
	$scope.getLeavesList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getLeavesList();
	};*/

	
	// Functionality for Advanced search
	
	$scope.leavesAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.leavesAllowedSearch($scope.search).then(function(data){
			$scope.leavesSearch = data.result;
			console.log($scope.leavesSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.leavesPost = function(){
		$scope.leaveObj=
		{
				"leaveType":$scope.postLeaves.leaveType
		}
		debugger;
		HrmsService.leavesAllowedPost($scope.leaveObj).then(function(data){
			$scope.postLeaves = data.result;
			console.log($scope.postLeaves);
			$scope.status = data.status;
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("leavesAllowedTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.leavesById = function(){
		debugger;
		HrmsService.leavesAllowedGetById($stateParams.leavesId).then(function(data){
			$scope.leavesGetList = data.result;
			console.log($scope.leavesGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.leavesEdit = function(){
		$scope.leavesAllowObj={
				 "id":$stateParams.leavesId,
				 "leaveType":$scope.leavesGetList.leaveType
		}
		debugger;
		HrmsService.leavesAllowedEdit($scope.leavesAllowObj).then(function(data){
			$scope.bgvEditList = data.result;
			console.log($scope.bgvEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("leavesAllowedTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.leaveDelete = function(){
		HrmsService.leavesAllowedRowDelete(id).then(function(data){
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
				$state.go("leavesAllowedTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);