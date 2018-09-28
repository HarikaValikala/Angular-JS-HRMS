hrmsApp.controller('teamTableCtrl',["$scope","$state","HrmsService","$stateParams",function($scope, $state,HrmsService,$stateParams ){
	
	
	 $scope.$on('$viewContentLoaded', function () {
		 $scope.teamgetlist();
		 $scope.bgetlist();
		 $scope.sbgetlist();
		 $scope.getByIdList();
		 $scope.setOptions(); 
	 });
		  
	 // pagination
		$scope.maxSize = 5; // Limit number for pagination display number.
		$scope.totalCount = 0; // Total number of items in all pages. initialize as
								// a zero
		$scope.pageIndex = 1; // Current page number. First page is 1.-->
		$scope.pageSizeSelected = 4; // Maximum number of items per page.

	 
	 $scope.teamgetlist = function(){
		 HrmsService.teampagenation($scope.pageIndex, $scope.pageSizeSelected).then(function(response){
			 $scope.teamlist = response.result;
			 console.log($scope.teamlist);
			 $scope.details = $scope.teamlist.result;
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
 $scope.teamgetlist();

 // This method is calling from pagination number
 $scope.pageChanged = function() { 
 	$scope.teamgetlist();
 

};

  /*Search By Name*/
$scope.searchTeam=function(search){
	$scope.search = search
	HrmsService.teamSearch($scope.search).then(function(data){
		$scope.teamsearchlist = data.result;
		console.log($scope.teamsearchlist);
	},function(err){
		
		
		if(err){
			$scope.errorMessage = err;
		}else{
			$scope.errorMessage = err;
       }   
    }
    )
}


           /*DropDown List*/

	 $scope.bgetlist= function(businessid){
			$scope.businessId = businessid;
			HrmsService.Businessunitlist().then(function(data){
				localStorage.setItem("id", $scope.businessId);

					$scope.budetails = data.result;
					console.log($scope.budetails)
			})
		};
		$scope.sbgetlist= function(sbusinessid){
			$scope.sbusinessId = sbusinessid;
			
			HrmsService.sbUnitList().then(function(data){
				
					$scope.sbudetails = data.result;
					console.log($scope.sbudetails);
			})
		};

		/*Toaster Messages*/
		$scope.setOptions = function() {
		    toastr.options.positionClass = "toast-top-center";
		   
		    toastr.options.closeButton = true;
		    toastr.options.showMethod = 'slideDown';
		    toastr.options.hideMethod = 'slideUp';
		    //toastr.options.newestOnTop = false;
		    toastr.options.progressBar = true;
		  };

		  $scope.setOptions(); 
		  
		//Post Method 
		
	$scope.teamPostList=function(){
		$scope.teamObj={
					"nameOfTheTeam":$scope.nameOfTheTeam ,		
					"subBusinessUnit": {
		                "id": $scope.sbu.id
		              
		                }
				}
		
		HrmsService.teampostList($scope.teamObj).then(function(data){
			$scope.teamlist = data.result;
			console.log($scope.teamlist);
			$scope.status = data.status; 
			$scope.errorMessage = data.errorMessage; 
			console.log($scope.status);
			console.log($scope.errorMessage);
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("teamTable");
			}else
			{
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
	
	// DropDown List For Based on Requirement
	
	$scope.subbusunit=function(id){

	HrmsService.dropdowngetlist(id).then(function(data){
		debugger;
		$scope.list=data.result;
	
		console.log($scope.list);

		$scope.status = data.status; 
		//alert($scope.status);
		
	},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
           }   
        }
        )

	
	}
	
	
	
	
	$scope.getByIdList = function(){
		HrmsService.teamgetById($stateParams.tid).then(function(data){
			$scope.teamget=data.result;
			
			console.log($scope.teamget)
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }   
		})
	};
	
	
	
	$scope.teamEdit = function(){
		$scope.teamEditObj=
				
				{
					/*"id":$stateParams.tid,*/
					"nameOfTheTeam": $scope.teamget.nameOfTheTeam,		
						"subBusinessUnit": {
			                "id": $scope.teamget.subBusinessUnit.id
			              
			                }
				}

		HrmsService.teamEditList($stateParams.tid,$scope.teamEditObj).then(function(data){
			$scope.teamedit= data.result;
			$scope.status = data.status; 
			console.log($scope.teamedit);
			$scope.errorMessage = data.errorMessage; 
			console.log($scope.status);
			console.log($scope.errorMessage);
			if($scope.status == "Success"){
				toastr.success($scope.errorMessage);
				$state.go("teamTable");
			}else
			{
				toastr.error($scope.errorMessage);
	       } 
	/*	},function(err){
			if(err){
				$scope.errorMessage = err;
			}else{
				$scope.errorMessage = err;
	       }*/   
		})
	};
	$scope.teamdelete= function(id){
		HrmsService.teamdeleteRow(id).then(function(data){
			$scope.teamRow = data.result;
			
			console.log($scope.teamRow);
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
}
}]);
