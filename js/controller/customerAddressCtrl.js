hrmsApp.controller('customerAddressCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.setOptions();
		$scope.getAddressList();
		$scope.cusBasicList();
		$scope.addressTypeList();
		$scope.addressById();
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
	  

		// Get functionality for Customer Name
		
		$scope.cusBasicList = function(cusBasid){
			debugger;
			$scope.cusBasId = cusBasid;
			HrmsService.cusDefGetAll().then(function(data){
				$scope.customerDetails = data.result;
				console.log($scope.customerDetails);
			})
		};
		
		// Get functionality for Address Type
		
		$scope.addressTypeList = function(addTypeid){
			debugger;
			$scope.addTypeId = addTypeid;
			HrmsService.cusAddressTypeGetAll().then(function(data){
				$scope.addressDetails = data.result;
				console.log($scope.addressDetails);
			})
		};
		
	  	// pagination
		$scope.maxSize = 5; // Limit number for pagination display number.
		$scope.totalCount = 0; // Total number of items in all pages. initialize as  a zero
		$scope.pageIndex = 1; // Current page number. First page is 1.-->
		$scope.pageSizeSelected = 2; // Maximum number of items per page.
		
		
		// Functionality for Get All
		
		$scope.getAddressList = function(){
			debugger;
			HrmsService.customerAddressPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
				$scope.addressList = response.result;
				console.log($scope.addressList);
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
		
	    // Loading customer address list on first time
		$scope.getAddressList();

		// This method is calling from pagination number
		$scope.pageChanged = function() { 
			$scope.getAddressList();
		};
	
		
	// Functionality for Advanced search
		
		$scope.addressAdvance = function(search){
			$scope.search=search;

			debugger;
			HrmsService.customerAddressSearch($scope.search).then(function(data){
				$scope.cusBillSearch = data.result;
				console.log($scope.cusBillSearch);
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
		      }   
		   })
			
		}
		
		
		// Functionality for Post 
		
		$scope.addressPost = function(){
			$scope.addressObj={
					
					"customer":{
							
					"id":$scope.postAddress.cusBasId
							

						},
						
					"customerAddressType":{
						
						"id":$scope.postAddress.addTypeId
						
					},
						
					"address1":$scope.postAddress.address1,

						"address2":$scope.postAddress.address2,

						"address3":$scope.postAddress.address3,
						
					                 "city":$scope.postAddress.city,
						
					                "state":$scope.postAddress.state,
						
					               "country":$scope.postAddress.country,
						
					              "pincode":$scope.postAddress.pincode
						

					}
			debugger;
			HrmsService.customerAddressPost($scope.addressObj).then(function(data){
				$scope.postAddress = data.result;
				console.log($scope.postAddress);
				$scope.status = data.status;
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("customerAddressTable");
				}else{
					toastr.error($scope.errorMessage);
		       }  
			})
		};
		
		// Functionality for Get By ID 
		
		$scope.addressById = function(){
			debugger;
			HrmsService.customerAddressGetById($stateParams.addressId).then(function(data){
				$scope.addressGetList = data.result;
				console.log($scope.addressGetList);
			},function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
				}   
			})
		};
		
		// Functionality for Put
		
		$scope.addressEdit = function(){
			$scope.customerObj={
					"id":$stateParams.addressId,
					"customer":{
							
					"id":$scope.addressGetList.customer.id
							

						},
						
					"customerAddressType":{
						
						"id":$scope.addressGetList.customerAddressType.id
						
					},
						
					"address1":$scope.addressGetList.address1,

						"address2":$scope.addressGetList.address2,

						"address3":$scope.addressGetList.address3,
						
					                 "city":$scope.addressGetList.city,
						
					                "state":$scope.addressGetList.state,
						
					               "country":$scope.addressGetList.country,
						
					              "pincode":$scope.addressGetList.pincode
						

					}
			debugger;
			HrmsService.customerAddressEdit($scope.customerObj).then(function(data){
				$scope.addressEditList = data.result;
				console.log($scope.addressEditList);
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("customerAddressTable");
				}else{
					toastr.error($scope.errorMessage);
		       }  
			})
		};
		
		// Functionality for Delete
		
		$scope.addressDelete = function(id){
			HrmsService.customerAddressRowDelete(id).then(function(data){
				$scope.delRow = data.result;
				console.log($scope.delRow)
				$state.go("customerAddressTable");
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("customerAddressTable");
				}else{
					toastr.error($scope.errorMessage);
		       }  
			})
		};
		
}]);