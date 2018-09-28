hrmsApp.controller('customerAddressTypeCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.setOptions();
		$scope.getcusAdrsList();
		$scope.cusadrsById();
		$scope.getcusAdrsList();
		
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
	
	$scope.getcusAdrsList = function(){
		debugger;
		HrmsService.cusAddressTypePagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.GetcusAdrsType= response.result;
			console.log($scope.GetcusAdrsType);
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
	$scope.getcusAdrsList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getcusAdrsList();
	};

	// Functionality for Advanced search
	
	$scope.cusAdrsAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.cusAdrsSearch($scope.search).then(function(data){
			$scope.cusAddressSearch=data.result;
			console.log($scope.cusAddressSearch);
		},
		function(err){
				if(err){
					$scope.errorMessage = err;
				}else{
					$scope.errorMessage = err;
		      }  
			
		})
	}
		 
	
	// Functionality for Post 
	
	$scope.cusAdrsPost = function(){
		$scope.cusadrsObj = {
				"addressType":$scope.cusadrstypepost.addressType
		}
		debugger;
		HrmsService.cusAddressTypePost($scope.cusadrsObj).then(function(data){
			$scope.cusadrstypepost = data.result;
			console.log($scope.cusadrstypepost);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("customerAddressTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Get By ID 
	
	$scope.cusadrsById = function(){
		debugger;
		HrmsService.cusAddressTypeGetById($stateParams.cusAdrsTypeId).then(function(data){
			$scope.cusadrsGetList = data.result;
			console.log($scope.cusadrsGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	// Functionality for Put
	
	$scope.cusadrsEdit = function(){
		$scope.cusadrssObj = {
				"id":$stateParams.cusAdrsTypeId,
				"addressType":$scope.cusadrsGetList.addressType
			}
		debugger;
		HrmsService.cusAddressTypeEdit($scope.cusadrssObj).then(function(data){
			$scope.cusadrsEditList = data.result;
			console.log($scope.cusadrsEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
		
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("customerAddressTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	// Functionality for Delete
	
	$scope.cusadrsDelete = function(id){
		HrmsService.cusAddressTypeRowDelete(id).then(function(data){
			$scope.delRow = data.result;
			console.log($scope.delRow)
			$state.transitionTo($state.current, $stateParams, {
			    reload: true,
			    inherit: false,
			    notify: true
			});
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
		
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("customerAddressTypeTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
	
}]);