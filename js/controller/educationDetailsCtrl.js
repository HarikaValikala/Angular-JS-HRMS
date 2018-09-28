hrmsApp.controller('educationDetailsCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.setOptions();
		$scope.getEducationList();
		$scope.educationById();
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
	
	$scope.getEducationList = function(){
		debugger;
		HrmsService.educationDetailsPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.getEducation = response.result;
			console.log($scope.getEducation);
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
	$scope.getEducationList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getEducationList();
	};

	// Functionality for Post 
	
	$scope.educationPost = function(){
		$scope.educationObj = {

			"educationType":$scope.postEducation.educationType,
			"educationGroup":$scope.postEducation.educationGroup
			}
		debugger;
		HrmsService.educationDetailsPost($scope.educationObj).then(function(data){
			$scope.postEducation = data.result;
			console.log($scope.postEducation);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("educationDetailsTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.educationById = function(){
		debugger;
		HrmsService.educationDetailsGetById($stateParams.educationId).then(function(data){
			$scope.educationGetList = data.result;
			console.log($scope.educationGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	$scope.educationType = [ "SSC","Intermediate", "Graduation", "Post Graduation" ];
	$scope.educationEdit = function(){
		$scope.educationDetailsObj = {
				"id":$stateParams.educationId,
				"educationType":$scope.educationGetList.educationType,
				"educationGroup":$scope.educationGetList.educationGroup
			}
		debugger;
		HrmsService.educationDetailsEdit($scope.educationDetailsObj).then(function(data){
			$scope.educationEditList = data.result;
			console.log($scope.educationEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("educationDetailsTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.educationDelete = function(id){
		HrmsService.educationDetailsRowDelete(id).then(function(data){
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
				$state.go("educationDetailsTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);