hrmsApp.controller('bondTypeCtrl',["$scope","$state","$http",'HrmsService',"$stateParams",function($scope, $state,$http,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded',function(){
		$scope.bondTypeList();
		$scope.bondGetbyId();
		 $scope.setOptions(); 
		 $scope.tagResult={};
		 $scope.contractperiodList();
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
	$scope.pageSizeSelected = 2; // Maximum number of items per page.

	
	$scope.bondTypeList = function(){
		debugger;
		HrmsService.bondTypePagination($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.bondList = response.result;
			console.log($scope.bondList);
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
	$scope.bondTypeList();

	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.bondTypeList();
	};




	 /*  $scope.checkErr = function(startDate,endDate) {
	      $scope.errMessage = '';
	       var curDate = new Date();
	       
	       if(new Date(startDate) > new Date(endDate)){
	         $scope.errMessage = 'endDate should be greater than start date';
	         return false;
	       }
	   };*/
	
	
	
	
	
	
	// Functionality for Advanced search
	$scope.bondAdvance = function(search){
		$scope.search=search;

		debugger;
		HrmsService.searchBondType($scope.search).then(function(data){
			$scope.bondTypeSearch = data.result;
			console.log($scope.bondTypeSearch);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	      }   
	   })
		
	}
	
	
	//Functionality for Contract Period
	
	$scope.contractperiodList = function(id){
		debugger;
		$scope.cpId = id;
		HrmsService.contractGet().then(function(response){
			$scope.cplist = response.result;
			console.log($scope.getList);
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}   
		})
	};
	
	//Function for POST API
	
	$scope.tag={
			  "bondType":$scope.bondType,
			  "contractPeriod":{
					"id":$scope.cpId
					},
	          
	           "salarySlabBased": $scope.salarySlabBased,
			"salaries":[
                {
                  "startDate": $scope.startDate,
                  "endDate": $scope.endDate,
                  "salaryAmount": $scope.salaryAmount
                }
               ]	
	}
	
	

	$scope.bondTypePost = function(){
		debugger;
		
		HrmsService.bondTypeAddList($scope.tag).then(function(response){
			$scope.bondTypeAdd = response.result;		
			console.log($scope.bondTypeAdd);
			$scope.status = response.status; 
			$scope.errorMessage = response.errorMessage; 
			/*toastr.success($scope.status);*/
			
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("bondTypeTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
	    })
	};
	 
	//Function for GETById API 
	$scope.bondGetbyId=function(){
		debugger;
		HrmsService.bondTypeGetById($stateParams.bondId).then(function(data){
			$scope.tag= data.result;
			$scope.tag.salaries.startDate = new Date($scope.tag.salaries.startDate);
			console.log($scope.tag);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }   
		})
	}

	//Function for PUT API	
	$scope.bondTypeEditlist = function(){
		$scope.tag1={
				"id": $stateParams.bondId,
				  "bondType":$scope.tag.bondType,
				  "contractPeriod":{
						"id":$scope.tag.contactPeriod.id,
						},
		          
		           "salarySlabBased": true,
				"salaries":[
	                {
	                  "startDate": $scope.tag.startDate,
	                  "endDate": $scope.tag.endDate,
	                  "salaryAmount": $scope.tag.salaryAmount
	                }
	               ]	
		}
		
		HrmsService.bondTypeEdit($stateParams.bondId,$scope.tag1).then(function(data){
			$scope.bondGetList = data.result;
			console.log($scope.bondGetList);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("bondTypeTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
		})
	}
	
	//Function for Delete API
	$scope.bondTypeDelete = function(id){
		debugger;
		HrmsService.bondTypeDeleteRow(id).then(function(data){
			$scope.bondDel = data.result;
			console.log($scope.bondDel);
			$state.transitionTo($state.current, $stateParams, {
			    reload: true,
			    inherit: false,
			    notify: true
			});
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("bondTypeTable");
			}else{
				toastr.error($scope.errorMessage);
				
	       }  
		})
		
	}
	
	// check box visibility 
	$scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.tag.salarySlabBased;
        
    }

	// Adding colomns Dynamically 
    $scope.addNewColumn = function() {
		  $scope.tag.salaries.push({ 
			  "startDate": $scope.startDate,
              "endDate": $scope.endDate,
              "salaryAmount": $scope.salaryAmount
          });
	 };
	 $scope.removeColumn = function(index) {
		 // remove the row specified in index
		 $scope.tag.salaries.splice( index, 1);
		 // if no rows left in the array create a blank array
		
	 };
	
	 
	 $scope.viewDetails=function(bondtypeId){
		 debugger;
		HrmsService.bondTypeGetById(bondtypeId).then(function(data){
			$scope.tagResult= data.result.salaries;
		},function(err){
			if(err){
					$scope.errorMessage = err;
			}else{
					$scope.errorMessage = err;
		    }   
		})
	};
		




}]);	