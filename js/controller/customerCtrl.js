hrmsApp.controller('customerctrl',['$scope','$state','HrmsService','$stateParams', function($scope,$state,HrmsService,$stateParams){

	$scope.$on('$viewContentLoaded',function(){
		$scope.Cugetlist();
		$scope.locationlist();
		$scope.customerById();
		$scope.customerdelete();
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




	$scope.Cugetlist= function(){
		
		HrmsService.customerpagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
				$scope.custdetails = response.result;
				console.log($scope.custdetails)
				$scope.details = $scope.custdetails.result;
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
	$scope.Cugetlist();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.Cugetlist();
	};

	
	/* * //This method is calling from dropDown $scope.changePageSize =
	 * function () { $scope.pageIndex = 1; $scope.getAdminList(); };
	 */
	$scope.locationlist = function(locationid){
		$scope.locationId=locationid;
		debugger;
		HrmsService.locationfindall().then(function(data){
			$scope.locatelist = data.result;
			console.log($scope.locatelist);		
		})
	
	};
          $scope.customerpostreq = function(){
        	  $scope.cuObj = {
        			  "nameOfTheCustomer":$scope.nameOfTheCustomer,
        			  "contractPersonName":$scope.contractPersonName,
        			  "contactNo":$scope.contactNo,
        			  "emailId":$scope.emailId,
        			  "location":{
        			  "id":$scope.list.id

        			  }
        	  }
       
	
          HrmsService.customerpost($scope.cuObj).then(function(data){
        	  $scope.custom = data.result;
        	  console.log($scope.custom);
        	  $scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("customerTable");
				}else{
					toastr.error($scope.errorMessage);
					
		       } 
        	  $state.go("customerTable");
        	  
          
          })
          };

		
				$scope.customerById = function(){
					HrmsService.customerGetById($stateParams.cuId).then(function(data){
						$scope.custlist = data.result;
						console.log($scope.custlist);
					},function(err){
						if(err){
							$scope.errorMessage = err;
						}else{
							$scope.errorMessage = err;
				       }   
				    }
				    )
				};
				
				
				$scope.custEdit = function(){
					
		       
					HrmsService.CustomerEdit($stateParams.cuId,$scope.custlist).then(function(data){
						$scope.custlist = data.result;
						console.log($scope.custlist);
						  $scope.status = data.status; 
							$scope.errorMessage = data.errorMessage; 
							/*toastr.success($scope.status);*/
							if($scope.status == "Success"){
								toastr.success($scope.errorMessage);
								$state.go("customerTable");
							}else{
								toastr.error($scope.errorMessage);
							
					       } 
						$state.go("customerTable");
					  
					})
				};
				//Advanced search
				$scope.customerAdvance = function(search){
					$scope.search=search;

					debugger;
					HrmsService.customerSearch($scope.search).then(function(data){
						$scope.customerSearch = data.result;
						console.log($scope.customerSearch);
					},function(err){
						if(err){
							$scope.errorMessage = err;
						}else{
							$scope.errorMessage = err;
				      }   
				   })
					
				};
				$scope.customerdelete= function(id){
						HrmsService.custdeleteRow(id).then(function(data){
							$scope.custRow = data.result;
							console.log($scope.custRow)
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
					})
				}
				}]);


























