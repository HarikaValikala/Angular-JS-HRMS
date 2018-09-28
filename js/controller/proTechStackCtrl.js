hrmsApp.controller('proTechStackCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getProTechList();
		$scope.proById();
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
	$scope.pageSizeSelected = 3; // Maximum number of items per page.

		  
	// Functionality for Get All
	
	$scope.getProTechList = function(){
		debugger;
		HrmsService.projectTechPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.proList = response.result;
			console.log($scope.proList);
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
	$scope.getProTechList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getProTechList();
	};

	// Functionality for Advanced search
	
	$scope.proTechAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.projectTechSearch($scope.search).then(function(data){
			$scope.proSearch = data.result;
			console.log($scope.proSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	// Functionality for Post 
	
	$scope.proTechPost = function(){
		$scope.proObj = {
			"projectTechStack":$scope.postProTech.projectTechStack
		}
		debugger;
		HrmsService.projectTechPost($scope.proObj).then(function(data){
			$scope.postProTech = data.result;
			console.log($scope.postProTech);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("proTechStackTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.proById = function(){
		debugger;
		HrmsService.projectTechGetById($stateParams.proId).then(function(data){
			$scope.proGetList = data.result;
			console.log($scope.proGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.proEdit = function(){
		$scope.proTechObj = {
				 "id": $stateParams.proId,
				 "projectTechStack":$scope.proGetList.projectTechStack
		}
		debugger;
		HrmsService.projectTechEdit($scope.proTechObj).then(function(data){
			$scope.proEditList = data.result;
			console.log($scope.proEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("proTechStackTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.proTechDelete = function(id){
		HrmsService.projectTechDelete(id).then(function(data){
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
			$state.go("proTechStackTable");
		})
	};
	
}]);