hrmsApp.controller("resourceTableCtrl",function($scope,HrmsService,$stateParams,$state){
	$scope.$on('$viewContentLoaded', function () {
		$scope.getList();
		$scope.searchRtype();
	})
	// pagination
	$scope.maxSize = 2; // Limit number for pagination display number.
	$scope.totalCount = 0; // Total number of items in all pages. initialize as
							// a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 3; // Maximum number of items per page.

	$scope.getList = function(){
		HrmsService.respagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.resourceList = response.result.result;
			console.log($scope.resourceList);
			$scope.details = $scope.resourceList.result;
			$('.disabledDrop').attr('disabled', true)
			$scope.totalCount = response.count;
			console.log($scope.totalCount);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
           }   
        }
        )

	}

    // Loading employees list on first time
$scope.getList();

// This method is calling from pagination number
$scope.pageChanged = function() { 
	$scope.getList();
};

/*
 * //This method is calling from dropDown $scope.changePageSize =
 * function () { $scope.pageIndex = 1; $scope.getAdminList(); };
 */
	
	$scope.searchRtype=function(search){
		$scope.search=search;
		debugger;
		HrmsService.resourceSearch($scope.search).then(function(data){
			$scope.reList = data.result; 
			console.log($scope.reList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
           }   
        }
        )
	};
	$scope.resdelete= function(id){
		HrmsService.resdeleteRow(id).then(function(data){
			$scope.resRow = data.result;
			console.log($scope.resRow);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			console.log($scope.resource);
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("resourceTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
			$state.transitionTo($state.current, $stateParams, {
			    reload: true,
			    inherit: false,
			    notify: true
			});
	})
	}
	
});


hrmsApp.controller("resourceAddCtrl",function($scope,HrmsService,$state){
	$scope.$on('$viewContentLoaded', function () {
		
	});
	$scope.setOptions = function() {
	    toastr.options.positionClass = "toast-top-center";
	   
	    toastr.options.closeButton = true;
	    toastr.options.showMethod = 'slideDown';
	    toastr.options.hideMethod = 'slideUp';
	    //toastr.options.newestOnTop = false;
	    toastr.options.progressBar = true;
	  };

	  $scope.setOptions(); 
	$scope.resourceAddList = function(){
		debugger;
		HrmsService.resourcepost($scope.postList).then(function(data){
			$scope.postList = data.result; 
			console.log($scope.postList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			console.log($scope.postList);
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("resourceTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
           }   
        }
        )
	}
});
hrmsApp.controller("resourceEditCtrl",function($scope,HrmsService,$stateParams,$state){
	$scope.$on('$viewContentLoaded', function () {
		$scope.resourceGetById();
	});
	$scope.resourceGetById = function(){
		HrmsService.resourcegetById($stateParams.resourceId).then(function(data){
			$scope.resource = data.result;
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }   
	    }
	    )
	};
	$scope.setOptions = function() {
	    toastr.options.positionClass = "toast-top-center";
	   
	    toastr.options.closeButton = true;
	    toastr.options.showMethod = 'slideDown';
	    toastr.options.hideMethod = 'slideUp';
	    //toastr.options.newestOnTop = false;
	    toastr.options.progressBar = true;
	  };

	  $scope.setOptions(); 
	$scope.resourceEditList = function(){
		debugger;
		HrmsService.resourceEdit($scope.resource).then(function(data){
			$scope.resource = data.result;
		 
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			console.log($scope.resource);
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("resourceTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }   
	    }
	    )
	};
	
	
});
