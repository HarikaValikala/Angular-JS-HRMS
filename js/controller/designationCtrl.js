hrmsApp.controller('designationCtrl',['$scope','$state','HrmsService','$stateParams', function($scope,$state,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		
		$scope.getDesignation();
	
		$scope.sbuGet();
		
		$scope.desigGetById();
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
	$scope.pageSizeSelected = 4; // Maximum number of items per page.

	
	
	$scope.getDesignation = function (){
		debugger;
		HrmsService.pagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.getdesiglist = response.result;
			console.log($scope.getdesiglist);
			$scope.details = $scope.getdesiglist;
			$('.disabledDrop').attr('disabled', true)
			$scope.totalCount = response.count;
			console.log($scope.totalCount);
 		})
 		
	};
	
	  

			    // Loading employees list on first time
			$scope.getDesignation();

			// This method is calling from pagination number
			$scope.pageChanged = function() { 
				$scope.getDesignation();
			};

			/*
			 * //This method is calling from dropDown $scope.changePageSize =
			 * function () { $scope.pageIndex = 1; $scope.getAdminList(); };
			 */
	
	
			// Functionality for Advanced search
			$scope.designationAdvance = function(search){
				$scope.search=search;

				debugger;
				HrmsService.searchDesignation($scope.search).then(function(data){
					$scope.desigSearch = data.result;
					console.log($scope.desigSearch);
				},function(err){
					if(err){
						$scope.errorMessage = err;
					}else{
						$scope.errorMessage = err;
			      }   
			   })
				
			}
	
/*	
	$scope.buGet=function(businessid){
		debugger;
		$scope.businessId = businessid;
		HrmsService.Businessunitlist().then(function(data){
			localStorage.setItem("b1", $scope.businessId);
				$scope.budetails = data.result;
				console.log($scope.budetails)
		})
	};*/
	$scope.sbuGet= function(sbusinessid){
		debugger;
		$scope.sbusinessId = sbusinessid;
		
		HrmsService.sbUnitList().then(function(data){
			localStorage.setItem("sb1",sbusinessid);
				$scope.sbudetails = data.result;
				$scope.id=data.result.id;
				console.log($scope.id);
				console.log($scope.sbudetails);
		})
	};
	
	/*$scope.subbusunit=function(id){
		$scope.sbusinessId = id;
		HrmsService.dropdowngetlist(id).then(function(data){
			debugger;
			$scope.list=data.result;
		
			console.log($scope.list);
			
		},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
	           }   
	        }
	        )

		
		}*/
	$scope.desigPost = function(){	
		$scope.designationObj=
			{
				"designation":$scope.designation,
				"subBusinessUnitId":{
				"id":$scope.sbusinessId
				}
				}
		 
			/*	$scope.bsadd = JSON.stringify($scope.u);*/
				HrmsService.designationPost($scope.designationObj).then(function(data){
					debugger;
					$scope.desigList = data.result;
					console.log($scope.desigList);
					$scope.status = data.status; 
					$scope.errorMessage = data.errorMessage; 
					/*toastr.success($scope.status);*/
		
					if($scope.status == "Success"){
						toastr.success($scope.errorMessage);
						$state.go("designationTable");
					}else{
						toastr.error($scope.errorMessage);
						//$state.go("costCenterTable")
			       } 
		       })
		
	}
	
	
	
	$scope.desigGetById = function(){
		debugger;
		HrmsService.designationGetbyId($stateParams.desigId).then(function(data){
			$scope.desigGet = data.result;
			console.log($scope.desigGet);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }   
		})
	}

	$scope.desigEdit = function(){
		$scope.desigEditObj = 
		{
			"id":$stateParams.desigId,
			"designation":$scope.desigGet.designation,
			"subBusinessUnitId":{
				"id":$scope.desigGet.subBusinessUnitId.id
			}
				
		}
		HrmsService.designationEditList($scope.desigEditObj).then(function(data){
			$scope.desigedit = data.result;
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/

			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("designationTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
		})
	};
	$scope.desdelete= function(id){
		HrmsService.desdeleteRow(id).then(function(data){
			$scope.desRow = data.result;
			console.log($scope.desRow)
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
				$state.go("designationTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
	})
}
}]);