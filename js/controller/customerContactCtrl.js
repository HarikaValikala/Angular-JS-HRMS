hrmsApp.controller('customerContactCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
     $scope.customernameList();
     $scope.cuscontacttype();
     $scope.getCusContactList();
     $scope.setOptions();
	 $scope.cusById();

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
	$scope.customernameList = function(cuslistid){
		debugger;
		$scope.cuslistID = cuslistid;
		
		HrmsService.cusDefGetAll().then(function(data){
		
				$scope.cuscondetails = data.result;
			
				console.log($scope.cuscondetails);
	
		})
	}
	// Get functionality for Contact Type
	$scope.cuscontacttype=function(custypeid){
		debugger;
		$scope.custypeid=custypeid;
		HrmsService.contTypeGetAll().then(function(data){
			$scope.custypedetails = data.result;		
			console.log($scope.custypedetails);
		})
	}
	// pagination
	$scope.maxSize = 5; // Limit number for pagination display number.
	$scope.totalCount = 0; // Total number of items in all pages. initialize as  a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.
	$scope.pageSizeSelected = 3; // Maximum number of items per 
	
	// Functionality for Get All
	$scope.getCusContactList=function(){
		debugger;
		HrmsService.cusContactPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.getCusList=response.result;
			console.log($scope.getCusList);
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
	$scope.getCusContactList();
	
	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.getCusContactList();
	};
// Functionality for Advanced search
	
	$scope.cusContactAdvance = function(search){
		$scope.search=search;
		debugger;
		HrmsService.cusContactSearch($scope.search).then(function(data){
			$scope.cusSearch = data.result;
			console.log($scope.cusSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	
	// Functionality for Post 
	
	$scope.cusPost = function(){
		$scope.cusDbj = {
				
				   "customer":
				  {
						
				    "id":$scope.postCus.cuslistID
					
				  },
				"contactType":
				 {
					
				  "id":$scope.postCus.custypeId

				},

				"contactPersonName":$scope.postCus.contactPersonName,

				"emailId":$scope.postCus.emailId,

				"mobileNumber":$scope.postCus.mobileNumber,

				"dateOfBirth":$scope.postCus.dateOfBirth,

				"marritalStatus":$scope.postCus.marritalStatus,

				"anniversaryDate":$scope.postCus.anniversaryDate,

				"personalAddress":$scope.postCus.personalAddress,

				"officeAddress":$scope.postCus.officeAddress

				}
		debugger;
		HrmsService.cusContactePost($scope.cusDbj).then(function(data){
			$scope.postCus = data.result;
			console.log($scope.postCus);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("customerContactTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
// Functionality for Get By ID 
	
	$scope.cusById = function(){
		debugger;
		HrmsService.cusContactGetById($stateParams.cusCId).then(function(data){
			$scope.cusGetList = data.result;
			console.log($scope.cusGetList);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	

	// Functionality for Put
	
	$scope.cusEdit = function(){
		$scope.cusContactObj={

				   "customer":
				  {
						
				    "id":$scope.cusEditList.customer.id
					
				  },
				"contactType":
				 {
					
				  "id":$scope.cusEditList.contactType.id

				},

				"contactPersonName":$scope.cusEditList.contactPersonName,

				"emailId":$scope.cusEditList.emailId,

				"mobileNumber":$scope.cusEditList.mobileNumber,

				"dateOfBirth":$scope.cusEditList.dateOfBirth,

				"marritalStatus":$scope.cusEditList.marritalStatus,

				"anniversaryDate":$scope.cusEditList.anniversaryDate,

				"personalAddress":$scope.cusEditList.personalAddress,

				"officeAddress":$scope.cusEditList.officeAddress
		}
		debugger;
		HrmsService.cusContactEdit($scope.cusContactObj).then(function(data){
			$scope.cusEditList = data.result;
			console.log($scope.cusEditList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			toastr.success($scope.status);
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("customerContactTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
	
// Functionality for Delete
	
	$scope.cusDelete = function(id){
		HrmsService.customerConatctDelete(id).then(function(data){
			$scope.delRow = data.result;
			console.log($scope.delRow)
			$state.transitionTo($state.current, $stateParams, {
			    reload: true,
			    inherit: false,
			    notify: true
			});
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			toastr.success($scope.status);
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("customerContactTable");
			}else{
				toastr.error($scope.errorMessage);
	       }  
		})
	};
}]);
	
