hrmsApp.controller('locationctrl',['$scope','$state','HrmsService','$stateParams',function($scope,$state,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.locationpostreq();
		$scope.locationget();
		$scope.locationgetid();
		 $scope.setOptions(); 
		
	})
	
	
	
	
	
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
	$scope.totalCount = 0; // Total number of items in all pages. initialize as
							// a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 4; // Maximum number of items per page.

	
	
	$scope.locationget = function() {
		debugger;
		HrmsService.locationpagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){

			$scope.loclist = response.result;
			console.log($scope.loclist);
			$scope.details = $scope.loclist.result;
			$('.disabledDrop').attr('disabled', true)
			$scope.totalCount = response.count;
			console.log($scope.totalCount);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
	};
	 // Loading employees list on first time
	$scope.locationget();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.locationget();
	};

	
	$scope.locationpostreq = function(){
		debugger;
		$scope.loobj={ 
				"locationName":$scope.locationName
				
				}
	
	HrmsService.locationpost($scope.loobj).then(function(data){
		
		$scope.locationP =data.result;
        console.log($scope.locationP);
        $scope.status = data.status; 
		$scope.errorMessage = data.errorMessage; 
		/*toastr.success($scope.status);*/
		if($scope.status == "success"){
			toastr.success($scope.errorMessage);
			$state.go("locationTable");
		}else{
			toastr.error($scope.errorMessage);
			//$state.go("costCenterTable")
       } 
        $state.go("locationTable");

	})
	}
	
	
	$scope.locationgetid = function(){
		HrmsService.locationgetById($stateParams.locationId).then(function(data){
			$scope.locatlist = data.result;
			console.log($scope.locatlist);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }   
	    }
	    )
	};
	
	
	$scope.locEdit = function(){
		
				
		HrmsService.locationEdit($scope.locatlist).then(function(data){
			$scope.locedit = data.result;
			console.log($scope.locedit);
			  $scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				if($scope.status == "success"){
					toastr.success($scope.errorMessage);
					$state.go("locationTable");
				}else{
					toastr.error($scope.errorMessage);
				
		       } 
			$state.go("locationTable");
	
		})
	};
	//Advanced search
	$scope.locationAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.locationSearch($scope.search).then(function(data){
			$scope.locationSearch = data.result;
			console.log($scope.locationSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	};
	$scope.locdelete= function(id){
		HrmsService.locdeleteRow(id).then(function(data){
			$scope.locRow = data.result;
			console.log($scope.locRow)
			$state.transitionTo($state.current,$stateParams,{
				reload:true,
				inherit: false,
				notify:true
			});
		})
	}
	
	
}])