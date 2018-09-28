hrmsApp.controller('bspostctrl',['$scope','$state','HrmsService','$stateParams', function($scope,$state,HrmsService,$stateParams){

	$scope.$on('$viewContentLoaded',function(){
		$scope.getlist();
		$scope.costCenterList();
		$scope.BusinessGetById();
		$scope.budelete();
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
	$scope.totalCount = 0; // Total number of items in all pages. initialize as
							// a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 3; // Maximum number of items per page.




	$scope.getlist= function(){
		
		HrmsService.buspagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
				$scope.budetails = response.result;
				console.log($scope.budetails)
				$scope.details = $scope.budetails.result;
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
	}
	
    // Loading employees list on first time
	$scope.getlist();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getlist();
	};

	/*
	 * //This method is calling from dropDown $scope.changePageSize =
	 * function () { $scope.pageIndex = 1; $scope.getAdminList(); };
	 */
	$scope.updateDropDown = function () {

        
		if ($scope.businessget.nameOfBusinessUnit != null) {
			if ($scope.businessget.nameOfBusinessUnit.name != "businessget.nameOfBusinessUnit")
				$scope.enableMe = true;
			else
				$scope.enableMe = false;
		}

	
		 
	};
	
	
	
	$scope.costCenterList = function(costid){
		$scope.costId=costid;
		debugger;
		HrmsService.costCenterList().then(function(data){
			$scope.costlist = data.result;
//			console.log($scope.ct);
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
          }   
       }
       )
	
	};
	//Functionality for Advanced search
	$scope.busAdvance = function(search){
	$scope.search=search;

	debugger;
	HrmsService.busSearch($scope.search).then(function(data){
	$scope.busSearch = data.result;
	console.log($scope.busSearch);
	},function(err){
	if(err){
	$scope.errorMessage = err;
	}else{
	$scope.errorMessage = err;
	     }  
	  })

	};
	$scope.businessPostreq = function(){	
		$scope.buObj={
				"nameOfBusinessUnit":$scope.nameOfBusinessUnit,
				"costCenterId":{
				"id":$scope.costId
				}
		}
	
			/*	$scope.bsadd = JSON.stringify($scope.u);*/
				HrmsService.businesspost($scope.buObj).then(function(data){
					debugger;
					$scope.businessU = data.result;
					console.log($scope.businessU);
					  $scope.status = data.status; 
						$scope.errorMessage = data.errorMessage; 
						/*toastr.success($scope.status);*/
						if($scope.status == "success"){
							toastr.success($scope.errorMessage);
							$state.go("BusinessUnitTable");
						}else{
							toastr.error($scope.errorMessage);
							
				       } 
					$state.go("BusinessUnitTable");
		       })
};

$scope.BusinessGetById = function(){
	
	HrmsService.BusinessGetById($stateParams.bId).then(function(data){
		$scope.businessget=data.result;
		console.log($scope.businessget);
		
	},function(err){
		if(err){
			$scope.errorMessage = err;
		}else{
			$scope.errorMessage = err;
       }   
	})
};
//Functionality for Advanced search
$scope.busAdvance = function(search){
	$scope.search=search;

	debugger;
	HrmsService.busSearch($scope.search).then(function(data){
		$scope.busSearch = data.result;
		console.log($scope.busSearch);
	},function(err){
		if(err){
			$scope.errorMessage = err;
		}else{
			$scope.errorMessage = err;
      }   
   })
	
};
$scope.businessEditList = function(){
	$scope.business={
			"nameOfBusinessUnit":$scope.businessget.nameOfBusinessUnit,
			"costCenterId":{
			"id":$scope.businessget.costCenterId.id
			}
	}
HrmsService.BusinessunitEdit($stateParams.bId,$scope.business).then(function(data){
		
		$scope.businessedit= data.result;
		console.log($scope.businessedit);
		  $scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("BusinessUnitTable");
			}else{
				toastr.error($scope.errorMessage);
				
	       } 
		
 
	})
};

$scope.budelete= function(id){
		HrmsService.BudeleteRow(id).then(function(data){
			$scope.buRow = data.result;
			console.log($scope.buRow)
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
					$state.go("BusinessUnitTable");
				}else{
					toastr.error($scope.errorMessage);
					
		       } 
	})
}
}]);


	




