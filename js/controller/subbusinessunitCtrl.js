
hrmsApp.controller('sbunitCtrl',['$scope','$state','HrmsService','$stateParams', function($scope,$state,HrmsService,$stateParams){

	$scope.$on('$viewContentLoaded',function(){
	
		$scope.getlist();
		$scope.getsubUnitList();
		$scope.subusinessGetById();
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
	
	
	
	$scope.getlist= function(businessid){
		$scope.businessId = businessid;
		HrmsService.Businessunitlist().then(function(data){
				$scope.budetails = data.result;
				console.log($scope.budetails)
		})
	}

	$scope.subbusinessSave = function(){	
		$scope.sbuObj={
			
		"subBusinessUnitName":$scope.subBusinessUnitName,
		"bussinessUnitId":{
		"id": $scope.businessId
		        
		       	
		       }
		}
		 
			/*	$scope.bsadd = JSON.stringify($scope.u);*/
				HrmsService.subbusinesspost($scope.sbuObj).then(function(data){
					debugger;
					$scope.sbUnit = data.result;
					console.log($scope.sbUnit);
					$scope.status = data.status; 
					$scope.errorMessage = data.errorMessage; 
					/*toastr.success($scope.status);*/
					
					
					if($scope.status == "Success"){
						toastr.success($scope.errorMessage);
						$state.go("subBusinessUnit");
					}else{
						toastr.error($scope.errorMessage);
						//$state.go("costCenterTable")
			       } 
		       })
		
};

//pagination
$scope.maxSize = 5; // Limit number for pagination display number.
$scope.totalCount = 0; // Total number of items in all pages. initialize as
						// a zero
$scope.pageIndex = 1; // Current page number. First page is 1.-->
$scope.pageSizeSelected = 3; // Maximum number of items per page.

$scope.getsubUnitList= function(){

	HrmsService.sbuspagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.sblist = response.result;
			console.log($scope.sblist);
			$scope.details = $scope.sblist.result;
			$('.disabledDrop').attr('disabled', true)
			$scope.totalCount = response.count;
			console.log($scope.totalCount);
	})
}

// Loading employees list on first time
$scope.getsubUnitList();

//This method is calling from pagination number
$scope.pageChanged = function() { 
$scope.getsubUnitList();
};

/*
* //This method is calling from dropDown $scope.changePageSize =
* function () { $scope.pageIndex = 1; $scope.getAdminList(); };
*/
 

// Functionality for Advanced search
$scope.sbuAdvance = function(search){
	$scope.search=search;

	debugger;
	HrmsService.sbuSearch($scope.search).then(function(data){
		$scope.sbuAdvSearch = data.result;
		console.log($scope.sbuAdvSearch);
	},function(err){
		if(err){
			$scope.errorMessage = err;
		}else{
			$scope.errorMessage = err;
      }   
   })
	
}


$scope.subusinessGetById = function(){
	
	HrmsService.subusinessGetById($stateParams.sbId).then(function(data){
		$scope.subusinessget=data.result;
		console.log($scope.subusinessget);
	},function(err){
		if(err){
			$scope.errorMessage = err;
		}else{
			$scope.errorMessage = err;
       }   
	})
};

$scope.subusinessEditList = function(){
	$scope.sbUnitObj={
			
			"subBusinessUnitName":$scope.subusinessget.subBusinessUnitName,
			"bussinessUnitId":{
				"id": $scope.subusinessget.bussinessUnitId.id
			        
			       	
			       }
			}

	HrmsService.subusinessEditList($stateParams.sbId,$scope.sbUnitObj).then(function(data){
		
		$scope.subusinessedit= data.result;
		console.log($scope.subusinessedit);
		$scope.status = data.status; 
		$scope.errorMessage = data.errorMessage; 
		/*toastr.success($scope.status);*/
		
		
		if($scope.status == "Success"){
			toastr.success($scope.errorMessage);
			$state.go("subBusinessUnit");
		}else{
			toastr.error($scope.errorMessage);
			//$state.go("costCenterTable")
       } 
	})
};
$scope.sbudelete= function(id){
	HrmsService.sbudeleteRow(id).then(function(data){
		$scope.sbuRow = data.result;
		console.log($scope.sbuRow)
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
			//$state.go("subBusinessUnit");
		}else{
			toastr.error($scope.errorMessage);
			//$state.go("costCenterTable")
       } 
})
}

}]);