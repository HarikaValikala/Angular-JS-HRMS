hrmsApp.controller('costcenterCtrl',["$scope","$state","HrmsService","$http",function($scope, $state,HrmsService,$http,$stateParams){
	 $scope.$on('$viewContentLoaded', function () {
		 $scope.costgetList();
		 $scope.status={};
	 })

	 // pagination
	$scope.maxSize = 5; // Limit number for pagination display number.
	$scope.totalCount = 0; // Total number of items in all pages. initialize as
							// a zero
	$scope.pageIndex = 1; // Current page number. First page is 1.-->
	$scope.pageSizeSelected = 4; // Maximum number of items per page.

	
	$scope.costgetList = function(){
		 debugger;
			HrmsService.costpagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			$scope.costList = response.result;
			console.log($scope.costList);
			$scope.details = $scope.costList.result;
			console.log($scope.details);
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
       /*     // Loading cost center list on first time
	$scope.costgetList();*/
	
	// This method is calling from pagination number
	$scope.pageChanged = function() { 
		$scope.costgetList();
	};
	//This method is calling from dropDown  
	$scope.changePageSize = function () {  
	    $scope.pageIndex = 1;  
	    $scope.costgetList();  
	};
        //toaster
	$scope.setOptions = function() {
	    toastr.options.positionClass = "toast-top-center";
	   
	    toastr.options.closeButton = true;
	    toastr.options.showMethod = 'slideDown';
	    toastr.options.hideMethod = 'slideUp';
	    //toastr.options.newestOnTop = false;
	    toastr.options.progressBar = true;
	  };

	  $scope.setOptions(); 
        
        /*delete for cost center*/
		$scope.costdelete= function(id){
			HrmsService.costdeleteRow(id).then(function(data){
				$scope.costRow = data.result;
				console.log($scope.costRow);
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				if($scope.status == "success"){
					toastr.success($scope.errorMessage);
					
				}else{
					toastr.error($scope.errorMessage);
					
		       } 
				$state.transitionTo($state.current, $stateParams, {
				    reload: true,
				    inherit: false,
				    notify: true
				});
		})
	};
		

	}; 
	

  


$scope.costgetList = function () {  
	 
        $http.get("http://localhost:8080/hrms/rest/costcenter/allcostcenters/" + $scope.pageIndex + "/4" ).then(function (response) {  
               $scope.costList = response.data.result;  
               $scope.totalCount = response.data.count; 
             //This method is calling from pagination number  
       	    	$scope.pageChanged = function () {  
       	        $scope.costgetList();  
       	    }; 
           }, function (err) {  
               var error = err;  
           });  
	    };  
$scope.advSearch=function(search){
	$scope.search=search;
	debugger;
	HrmsService.costAdvancedSearch($scope.search).then(function(data){
		$scope.seachlist=data.result
		console.log($scope.seachlist);
	},function(err){
		if(err){
			$scope.errorMessage = err;
		}else{
			$scope.errorMessage = err;
       }   
    })
};
}]); 
hrmsApp.controller("costAddCtrl",function($scope,HrmsService,$state){
	$scope.setOptions = function() {
	    toastr.options.positionClass = "toast-top-center";
	   
	    toastr.options.closeButton = true;
	    toastr.options.showMethod = 'slideDown';
	    toastr.options.hideMethod = 'slideUp';
	    //toastr.options.newestOnTop = false;
	    toastr.options.progressBar = true;
	  };

	  $scope.setOptions(); 
	  
	$scope.costAddList = function(){
		HrmsService.costCenterAdd($scope.costCenter).then(function(data){
			$scope.costCenter = data.result;
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			console.log($scope.costCenter);
			
			if($scope.status == "success"){
				toastr.success($scope.errorMessage);
				$state.go("costCenterTable");
			}else{
				toastr.error($scope.errorMessage);
				//$state.go("costCenterTable")
	       } 
			/*
		},function(err){
			if(err){
				$scope.errorMessage = err;
				$scope.errorMessage = err.errorMessage; 
				toastr.error($scope.errorMessage);
			}else{
				$scope.errorMessage = err;
	       }  */ 
	    })
	
	};
	
});
hrmsApp.controller("costEditCtrl",function($scope,HrmsService,$stateParams,$state){

	$scope.costGetbyid = function(){
		HrmsService.costGetById($stateParams.costAddId).then(function(data){
			$scope.costget=data.result;
			console.log($scope.costget);
			
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }   
		})
	}; 

	 $scope.costGetbyid();
	 
	 $scope.setOptions = function() {
		    toastr.options.positionClass = "toast-top-center";
		   
		    toastr.options.closeButton = true;
		    toastr.options.showMethod = 'slideDown';
		    toastr.options.hideMethod = 'slideUp';
		    //toastr.options.newestOnTop = false;
		    toastr.options.progressBar = true;
		  };

		  $scope.setOptions(); 
		  
	$scope.costEditList = function(){
		
		HrmsService.costCenterEdit($scope.costget).then(function(data){
			
			debugger;
			$scope.costget = data.result;
			console.log($scope.costget);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			/*toastr.success($scope.status);*/
			console.log($scope.costCenter);
			
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("costCenterTable");
			}else{
				toastr.error($scope.errorMessage);
			}
		/*},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }  */ 
		})
	};
	$scope.showMessage = function(input) {
	    var show = input.$invalid && (input.$dirty || input.$touched);
	    return show;
	  };
});

