hrmsApp.controller('employeeTypeCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.setOptions();
		$scope.getEmpList();
		$scope.empById();
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
	
	$scope.getEmpList = function(){
		debugger;
		HrmsService.empTypePagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.getList = response.result;
			console.log($scope.getList);
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
	$scope.getEmpList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getEmpList();
	};


	// Functionality for Advanced search
	
	$scope.empTypeAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.empSearch($scope.search).then(function(data){
			$scope.empTypeSearch = data.result;
			console.log($scope.empTypeSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.empPost = function(){
		$scope.empObj = {
				"employeeType":$scope.postEmp.employeeType
		}
		debugger;
		HrmsService.empTypePost($scope.empObj).then(function(data){
			$scope.postEmp = data.result;
			console.log($scope.postEmp);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("employeeTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.empById = function(){
		debugger;
		HrmsService.empGetById($stateParams.empId).then(function(data){
			$scope.empGetList = data.result;
			console.log($scope.empGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.emplyoeeTypeEdit = function(){
		$scope.empTypeObj = {
				"id":$stateParams.empId,
				"employeeType":$scope.empGetList.employeeType
			}
		debugger;
		HrmsService.empTypeEdit($scope.empTypeObj).then(function(data){
			$scope.empEditList = data.result;
			console.log($scope.empEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("employeeTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.empDelete = function(id){
		HrmsService.empTypeDelete(id).then(function(data){
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
				$state.go("employeeTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);