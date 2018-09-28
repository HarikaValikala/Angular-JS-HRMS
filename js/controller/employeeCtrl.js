hrmsApp.controller('employeCtrl',['$scope','$state','HrmsService','$stateParams','$rootScope', function($scope,$state,HrmsService,$stateParams,$rootScope){

	$scope.$on('$viewContentLoaded',function(){
		$scope.empgetreq();
		$scope.buGet();
		$scope.sbuGet();
		$scope.getList();
		$scope.getDesignation();
		$scope.getBondType();
		//$scope.teamdesig();
		//$scope.employeegetid();
		//$scope.tabwidget();
		 $scope.setOptions();
		 $scope.getTypeList();
		 $scope.getEmpList();
		 $scope.getEducationList();
		 $scope.subbusunit();
		 $scope.desigsub();
		 $scope.locationget();
		 //$scope.copyAddresses();
	})
/*	chexkbox Starts*/
	/*	$scope.employee.currentAddress = {};
	   $scope.employee.employeeBasicInfo.permanentAddress = {};
	
	   $scope.copyAddresses = function() {
	       if ($scope.copyAddress) {
	           $scope.employee.employeeBasicInfo.permanentAddress = angular.copy($scope.employee.currentAddress);
	       }
	   }
	
	   $scope.$watch('employee.currentAddress', function(newValue) {
	       if (newValue) {
	           $scope.copyAddresses();
	       } 
	   }, true);*/
	/*checkbox ends*/

	$scope.setOptions = function() {
	    toastr.options.positionClass = "toast-top-center";
	   
	    toastr.options.closeButton = true;
	    toastr.options.showMethod = 'slideDown';
	    toastr.options.hideMethod = 'slideUp';
	    //toastr.options.newestOnTop = false;
	    toastr.options.progressBar = true;
	  };

	
	  $scope.getEmpList = function(etid){
		  $scope.etid=etid;
			debugger;
			HrmsService.empTypeGet().then(function(response){
				$scope.getList = response.result;
				console.log($scope.getList);
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
				}   
			})
		};
	
	$scope.buGet=function(businessid){
		$scope.businessId = businessid;
		HrmsService.Businessunitlist().then(function(data){
				$scope.budetails = data.result;
				console.log($scope.budetails)
		})
	};
	$scope.sbuGet= function(sbusinessid){
		$scope.sbusinessId = sbusinessid;
		
		HrmsService.sbUnitList().then(function(data){
				$scope.sbudetails = data.result;
				$scope.id=data.result.id;
				console.log($scope.id);
				console.log($scope.sbudetails);
		})
	};
	
	$scope.getDesignation = function (){
		HrmsService.designationList().then(function(response){
			$scope.getdesiglist = response.result;
			console.log($scope.getdesiglist);
			
 		})
 		
	};
	
	$scope.subbusunit=function(subbusunitId){
		debugger;
		$scope.subbusunitId=subbusunitId
		HrmsService.dropdowngetlist($scope.subbusunitId).then(function(data){
			$scope.list=data.result;
		
			console.log($scope.list);
			$scope.status = data.status; 
		},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
	           }   
	        }
	        )

		
		}
	
	$scope.desigsub=function(desigsubId){
		debugger;
		$scope.desigsubId=desigsubId
		HrmsService.desigsublist($scope.desigsubId).then(function(data){
			$scope.dslist=data.result;
		
			console.log($scope.dslist);
			$scope.status = data.status; 
		},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
	           }   
	        }
	        )

		
		}
	
	
	$scope.getList = function(){
		HrmsService.resourcegetList().then(function(response){
			$scope.resourceList = response.result;
			console.log($scope.resourceList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
           }   
        }
        )

	}
	$scope.educationType = [ "SSC","Intermediate", "Graduation", "Post Graduation" ];
	$scope.getEducationList = function(EduId){
		debugger;
		$scope.EduId=EduId;
		HrmsService.educationDetailsGetAll($scope.EduId).then(function(response){
			$scope.getEducation = response.result;
			console.log($scope.getEducation);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	$scope.getBondType = function (){
		HrmsService.bondTypeGetAll().then(function(response){
			$scope.getBondlist = response.result;
			console.log($scope.getBondlist);
			
 		})
 		
	};
	$scope.locationget = function() {
		debugger;
		HrmsService.locationfindall().then(function(response){
			$scope.loclist = response.result;
			console.log($scope.loclist);
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
	};
$scope.getTypeList = function(){
		HrmsService.seperateTypeGet().then(function(response){
			$scope.getSepList = response.result;
			console.log($scope.getSepList);
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
		
		// pagination
		$scope.maxSize = 5; // Limit number for pagination display number.
		$scope.totalCount = 0; // Total number of items in all pages. initialize as
								// a zero
		$scope.pageIndex = 1; // Current page number. First page is 1.-->
		$scope.pageSizeSelected = 4; // Maximum number of items per page.

		
		
		$scope.empgetreq = function(){
			HrmsService.emppagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){

				$scope.empList = response.result;
				console.log("Emp details",$scope.empList);
				$scope.details = $scope.empList.result;
				$('.disabledDrop').attr('disabled', true)
				$scope.totalCount = response.count;
				console.log($scope.totalCount);
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}
			});
		}
		 // Loading employees list on first time
		$scope.empgetreq();

		// This method is calling from pagination number
		$scope.pageChanged = function() { 
			$scope.empgetreq();
		};
        
			
		/*		
		$scope.employeegetid = function(){
			HrmsService.employeegetById($stateParams.eId).then(function(data){
				$scope.employee = data.result;
				$scope.employee.dateOfBirth = new Date($scope.employee.dateOfBirth);
				$scope.employee.dateOfJoining = new Date($scope.employee.dateOfJoining);
				$scope.employee.kyc.passport.dateOfIssue = new Date($scope.employee.kyc.passport.dateOfIssue);
				$scope.employee.kyc.passport.dateOfExpiry = new Date($scope.employee.kyc.passport.dateOfExpiry);
				
				console.log("emp data",$scope.employee);
				$scope.dt = $scope.employee.subBusinessUnit.subBusinessUnitName;
				console.log($scope.dt);
				

			},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
		       }   
		    }
		    )
		};

		$scope.empEditreq = function(){
	           HrmsService.employeeEdit($scope.employee).then(function(data){
				$scope.employee = data.result;
				console.log($scope.employee);
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				toastr.success($scope.status);
				if($scope.status == "success"){
					toastr.success($scope.errorMessage);
					$state.go("employeeTable");
				}else{
					toastr.error($scope.errorMessage);
					
		       } 
			
			})
		};

		$scope.empEdiemptreq = function(){
			
					
			HrmsService. employeeEdit($scope.employee).then(function(data){
				$scope.kycemp = data.result;
				console.log($scope.kycemp);
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				toastr.success($scope.status);
				if($scope.status == "success"){
					toastr.success($scope.errorMessage);
					$state.go("employeView");
				}else{
					toastr.error($scope.errorMessage);
					//$state.go("costCenterTable")
		       } 
				
			
			 
			})
		};

		
		$scope.empEditpass = function(){
			
			
			HrmsService.employeeEdit($scope.employee).then(function(data){
				$scope.kycemp = data.result;
				console.log($scope.kycemp);
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				toastr.success($scope.status);
				if($scope.status == "success"){
					toastr.success($scope.errorMessage);
					$state.go("employeView");
				}else{
					toastr.error($scope.errorMessage);
					//$state.go("costCenterTable")
		       } 
				
			
		  
			})
		};
         */
		//Advanced search
		$scope.empnameAdvance = function(search){
			$scope.search=search;

			debugger;
			HrmsService.empNameSearch($scope.search).then(function(data){
				$scope.empnameSearch = data.result;
				console.log($scope.empnameSearch);
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
		      }   
		   })
			
		};
		
		//check box
		
		/*$scope.employee.employeeBasicInfo.currentAddress = {};
	    $scope.employee.employeeBasicInfo.permanentAddress = {};

	    $scope.copyAddresses = function() {
	        if ($scope.copyAddress) {
	            $scope.employee.employeeBasicInfo.permanentAddress = angular.copy($scope.employee.employeeBasicInfo.currentAddress);
	        }
	    }

	    $scope.$watch('employee.employeeBasicInfo.currentAddress', function(newValue) {
	        if (newValue) {
	            $scope.copyAddresses();
	        }
	    }, true);
	    */
	 // check box visibility 
	    $scope.IsVisible = false;
	       $scope.ShowHide = function () {
	           //If DIV is visible it will be hidden and vice versa.
	           $scope.IsVisible = $scope.shw;
	           
	       }



	        $scope.columns = [{fromDate:'',  toDate:'', salaryAmount:'' }];

	    $scope.addNewColumn = function() {
	     var newItemNo = $scope.columns.length+1;
	    $scope.columns.push({'fromId':'col'+newItemNo});
	    };
	    $scope.removeColumn = function(index) {
	    // remove the row specified in index
	    $scope.columns.splice( index, 1);
	    // if no rows left in the array create a blank array
	    if ( $scope.columns.length() === 0 || $scope.columns.length() == null){
	    alert('no rec');
	    }
	    };
	    
	    
	    
	    
	
		$scope.empdelete= function(id){
			HrmsService.empdeleteRow(id).then(function(data){
				$scope.empRow = data.result;
				console.log($scope.empRow)
				$state.transitionTo($state.current,$stateParams,{
					reload:true,
					inherit: false,
					notify:true
				});
				  $scope.status = data.status; 
					$scope.errorMessage = data.errorMessage; 
					toastr.success($scope.status);
					if($scope.status == "Success"){
						toastr.success($scope.errorMessage);
					
					}else{
						toastr.error($scope.errorMessage);
						
			       } 
			})
		
		}
		
	$scope.employeeAddreq = function(){
		debugger;
		/* var empid = parseInt($scope.employee.employeeBasicInfo.employeeId);
		 console.log(empid);*/
		HrmsService.employeePost($scope.employee).then(function(res){
			$scope.employee = res.result;
			console.log($scope.employee);
			$scope.status = res.status; 
			$scope.errorMessage = res.errorMessage; 
			toastr.success($scope.status);
			if($scope.status == "success"){
				toastr.success($scope.errorMessage);
				$state.go("employeTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("employeTable")
	       } 
		
	    })
	  
	};
}]);