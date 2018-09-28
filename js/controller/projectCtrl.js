hrmsApp.controller("projectctrl",function($scope,HrmsService,$stateParams){
	$scope.$on('$viewContentLoaded', function () {
		$scope.project();
		$scope.getById();
	});
	$scope.project = function(){
		HrmsService.projectGetlist().then(function(data){
			$scope.pjtlist = data.result;
			console.log($scope.pjtlist);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
		
	};
	$scope.projectSearch=function(search){
		$scope.search=search
		HrmsService.projectSearch($scope.search).then(function(data){
			$scope.searchlist = data.result;
			console.log($scope.searchlist);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
		
	}
	$scope.projectDelete= function(id){
		HrmsService.projectDelete(id).then(function(data){
			$scope.deleteRow = data.result;
			console.log($scope.deleteRow);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			if($scope.status == "Success"){
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
	//Add Functionality starts
	$scope.projectAddList = function(){
		
		HrmsService.projectPostlist($scope.pjtDetails).then(function(data){
			$scope.pjtlist=data.result;
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("projectType");
			}else{
				toastr.error($scope.errorMessage);
				
	       } 
	/*},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}*/
		})
	};
	
	//Add Functionality Ends
	
	//GetById Functionality starts
	$scope.getById = function(){
		HrmsService.projectGetById($stateParams.pid).then(function(data){
			$scope.pjtIdDetails = data.result;
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}
		})
	}
	//GetById Functionality ends
	
	//Update Functionality starts
		$scope.projectEditList = function(){
			$scope.pjtEditDetails={
					"id": $stateParams.pid,
					"projectTypeName": $scope.pjtIdDetails.projectTypeName,
					"projectTypeShortName": $scope.pjtIdDetails.projectTypeShortName
			}
			HrmsService.projectUpdate($scope.pjtEditDetails).then(function(data){
				$scope.pjtUpdateList = data.result;
				$scope.status = data.status; 
				$scope.errorMessage = data.errorMessage; 
				if($scope.status == "Success"){
					toastr.success($scope.errorMessage);
					$state.go("projectType");
				}else{
					toastr.error($scope.errorMessage);
					
		       } 
			/*},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
			}*/
		})
		}
		
//	
	//update Functionality Ends
});