hrmsApp.controller('customerDefCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.getCusDefList();
		$scope.billingList();
		$scope.bgvOwner();
		$scope.bgvVendor();
		$scope.leaveAllowGet();
		$scope.setOptions();
		$scope.cusDefById();
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
		$scope.pageSizeSelected = 2; // Maximum number of items per page.
		
		// Get functionality for Billing Model
		
		$scope.billingList = function(billingid){
			debugger;
			$scope.billingId = billingid;
			
			HrmsService.billingGetAll().then(function(data){
			
					$scope.billDetails = data.result;
				
					console.log($scope.billDetails);
			})
		};
		
		// Get functionality for BGV Owner
		
		$scope.bgvOwner = function(bgbOid){
			debugger;
			$scope.bgvOnId = bgbOid;
			
			HrmsService.bgvOwnerGetAll().then(function(data){
				
					$scope.bgvOwnDetails = data.result;
					
					console.log($scope.bgvOwnDetails);
			})
		};
		
		// Get functionality for BGV Vendor
		
		$scope.bgvVendor = function(bgbVid){
			debugger;
			$scope.bgvVnId = bgbVid;
			
			HrmsService.bgvVendorGetAll().then(function(data){
				
					$scope.bgvVenDetails = data.result;
					
					console.log($scope.bgvVenDetails);
			})
		};
		
		// Get functionality for Leave Allowed
		
		$scope.leaveAllowGet = function(leaveid){
			debugger;
			$scope.leaveId = leaveid;
			
			HrmsService.leavesGetAll().then(function(data){
				
					$scope.leaveDetails = data.result;
					
				
					console.log($scope.leaveDetails);
			})
		};
		
		// Functionality for Get All
		
		$scope.getCusDefList = function(){
			debugger;
			HrmsService.cusDefPagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
				$scope.cusList = response.result;
				console.log($scope.cusList);
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
		$scope.getCusDefList();

		// This method is calling from pagination number
		$scope.pageChanged = function() { 
			$scope.getCusDefList();
		};
	
		
	// Functionality for Advanced search
		
		$scope.cusAdvance = function(search){
			$scope.search=search;

			debugger;
			HrmsService.cusDefSearch($scope.search).then(function(data){
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
			$scope.cusDObj = {
					
					"customerName":$scope.postCus.customerName,
					"billingModel":{
						"id":$scope.postCus.billingId
					},
					"bgvOwner":{
						"id":$scope.postCus.bgvOnId
					},
					"bgvVendor":{
						"id":$scope.postCus.bgvVnId
					},
					"permanent":$scope.postCus.permanent,
					"c2H":$scope.postCus.c2H,
					"itServices":$scope.postCus.itServices,
					"leavesAllowed":{
						"id":$scope.postCus.leaveId
					},
					"gstId":$scope.postCus.gstId
			}
			debugger;
			HrmsService.cusDefPost($scope.cusDObj).then(function(data){
				$scope.postCus = data.result;
				console.log($scope.postCus);
				$scope.status = data.status;
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("customerDefTable");
				}else{
					toastr.error($scope.errorMessage);
		       }  
			})
		};
		
		// Functionality for Get By ID 
		
		$scope.cusDefById = function(){
			debugger;
			HrmsService.cusDefGetById($stateParams.cusDId).then(function(data){
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
			$scope.cusDefObj={
					"id":$stateParams.cusDId,
					"customerName":$scope.cusGetList.customerName,
					"billingModel":{
						"id":$scope.cusGetList.billingModel.id
					},
					"bgvOwner":{
						"id":$scope.cusGetList.bgvOwner.id
					},
					"bgvVendor":{
						"id":$scope.cusGetList.bgvVendor.id
					},
					"permanent":$scope.cusGetList.permanent,
					"c2H":$scope.cusGetList.c2H,
					"itServices":$scope.cusGetList.itServices,
					"leavesAllowed":{
						"id":$scope.cusGetList.leavesAllowed.id
					},
					"gstId":$scope.cusGetList.gstId
			}
			debugger;
			HrmsService.cusDefEdit($scope.cusDefObj).then(function(data){
				$scope.cusEditList = data.result;
				console.log($scope.custEditList);
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("customerDefTable");
				}else{
					toastr.error($scope.errorMessage);
		       }  
			})
		};
		
		// Functionality for Delete
		
		$scope.cusDelete = function(id){
			HrmsService.cusDefRowDelete(id).then(function(data){
				$scope.delRow = data.result;
				console.log($scope.delRow)
				$state.go("customerDefTable");
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				/*toastr.success($scope.status);*/
				
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("customerDefTable");
				}else{
					toastr.error($scope.errorMessage);
		       }  
			})
		};
		
}]);