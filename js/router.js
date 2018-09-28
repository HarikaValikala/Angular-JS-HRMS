//var hrmsApp = angular.module("myApp",['ui.router','ui.bootstrap']); 
angular.module("myApp").config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('/',{
          url:'/',
          templateUrl:'partials/login.html', 
          controller:'loginCtrl'       
      })
      .state('costCenterTable',{
  		resolve:{
			'check':function($q, $location, $rootScope){
				var defered = $q.defer();
			if(!$rootScope.user){
				defered.reject();
			$location.path('/');
			
					}else{
						defered.resolve(true);
					}
			return defered.promise;
				}
			},
    	  url:'/costCenterTable',
          templateUrl:'partials/costcenterTable.html', 
          controller:'costcenterCtrl',
          directive : "direct"
      })
       .state('costCenterAdd',{
    	  url:'/costCenterAdd',
          templateUrl:'partials/costcenterAdd.html', 
          controller:'costAddCtrl' 
      })
      
       .state('costCenterEdit',{
    	  url:'/costCenterEdit/:costAddId',
          templateUrl:'partials/costcenterEdit.html',
          controller:'costEditCtrl' 
           
      })
   

      
       .state('teamTable',{
    	   resolve:{
   			'check':function($q, $location, $rootScope){
   				var defered = $q.defer();
   			if(!$rootScope.user){
   				defered.reject();
   			$location.path('/');
   			
   					}else{
   						defered.resolve(true);
   					}
   			return defered.promise;
   				}
   			},
    	  url:'/teamTable',
          templateUrl:'partials/teamTable.html',
          controller:'teamTableCtrl'

       })
   
      .state('teamEdit',{
    	  url:'/teamEdit/:tid',
          templateUrl:'partials/teamEdit.html',
          controller:'teamTableCtrl'
           
      })
   
      .state('teamAdd',{
    	  url:'/teamAdd',
          templateUrl:'partials/teamAdd.html',
          controller:'teamTableCtrl'
           
      })
        .state('BusinessUnitTable',{
        	resolve:{
    			'check':function($q, $location, $rootScope){
    				var defered = $q.defer();
    			if(!$rootScope.user){
    				defered.reject();
    			$location.path('/');
    			
    					}else{
    						defered.resolve(true);
    					}
    			return defered.promise;
    				}
    			},
    	  url:'/BusinessUnitTable',
          templateUrl:'partials/Business_unitTable.html',
          controller:'bspostctrl'

           
      })
      .state('BusinessUnitEdit',{
    	  url:'/BusinessUnitEdit/:bId',
          templateUrl:'partials/Business_unitEdit.html',
        	  controller:'bspostctrl'
           
      })
       .state('BusinessUnitAdd',{
    	  url:'/BusinessUnitAdd',
          templateUrl:'partials/Business_unitAdd.html' ,
          controller:'bspostctrl'
           
      })
   
   
      .state('subBusinessUnit',{
    	  resolve:{
  			'check':function($q, $location, $rootScope){
  				var defered = $q.defer();
  			if(!$rootScope.user){
  				defered.reject();
  			$location.path('/');
  			
  					}else{
  						defered.resolve(true);
  					}
  			return defered.promise;
  				}
  			},
    	  url:'/subBusinessUnit',
          templateUrl:'partials/sub_businessunit.html',
          controller:'sbunitCtrl'
      })
      .state('subBusinessUnitAdd',{
    	  url:'/subBusinessUnitAdd',
          templateUrl:'partials/sub_businessunitAdd.html',
          controller:'sbunitCtrl'
           
      })
       .state('subBusinessUnitEdit',{
    	  url:'/subBusinessUnitEdit/:sbId',
          templateUrl:'partials/sub_businessunitEdit.html',
          controller:'sbunitCtrl'
           
      })
 
      .state('resourceTable',{
    	  resolve:{
  			'check':function($q, $location, $rootScope){
  				var defered = $q.defer();
  			if(!$rootScope.user){
  				defered.reject();
  			$location.path('/');
  			
  					}else{
  						defered.resolve(true);
  					}
  			return defered.promise;
  				}
  			},
    	  url:'/resourceTable',
          templateUrl:'partials/resourceTable.html', 
          controller:'resourceTableCtrl' 
      })
      .state('resourceAdd',{
    	  url:'/resourceAdd',
          templateUrl:'partials/resourceAdd.html', 
          controller:'resourceAddCtrl' 
      })
     .state('resourceEdit',{
    	  url:'/resourceEdit/:resourceId',
          templateUrl:'partials/resourceEdit.html', 
          controller:'resourceEditCtrl' 
      })
      .state('designationAdd',{
   	 url:'/designationAdd',
         templateUrl:'partials/designationAdd.html', 
         controller:'designationCtrl' 
     })
     .state('designationTable',{
    	 resolve:{
 			'check':function($q, $location, $rootScope){
 				var defered = $q.defer();
 			if(!$rootScope.user){
 				defered.reject();
 			$location.path('/');
 			
 					}else{
 						defered.resolve(true);
 					}
 			return defered.promise;
 				}
 			},
   	 url:'/designationTable',
         templateUrl:'partials/designationTable.html', 
         controller:'designationCtrl' 
     })
      .state('designationEdit',{
   	 url:'/designationEdit/:desigId',
         templateUrl:'partials/designationEdit.html', 
         controller:'designationCtrl' 
     })

     /* .state('dashboard',{
          url:'/dashboard',
          templateUrl:'partials/dashboard.html' */

      .state('projectType',{
    	  resolve:{
  			'check':function($q, $location, $rootScope){
  				var defered = $q.defer();
  			if(!$rootScope.user){
  				defered.reject();
  			$location.path('/');
  			
  					}else{
  						defered.resolve(true);
  					}
  			return defered.promise;
  				}
  			},
    	  url:'/projectType',
         templateUrl:'partials/projectType.html', 
         controller:'projectctrl' 
     })
     .state('projectEdit',{
    	  url:'/projectEdit/:pid',
         templateUrl:'partials/projectEdit.html', 
         controller:'projectctrl' 
     })
      .state('projectAdd',{
    	  url:'/projectAdd',
         templateUrl:'partials/projectAdd.html', 
         controller:'projectctrl' 
     })
       .state('projectCreation',{
    	  url:'/projectCreation',
         templateUrl:'partials/projectCreation.html' , 
         controller:'CreationCtrl' 

     })
      .state('projectCreationList',{
    	  resolve:{
  			'check':function($q, $location, $rootScope){
  				var defered = $q.defer();
  			if(!$rootScope.user){
  				defered.reject();
  			$location.path('/');
  			
  					}else{
  						defered.resolve(true);
  					}
  			return defered.promise;
  				}
  			},
    	  url:'/projectCreationList',
         templateUrl:'partials/projectCreationList.html' , 
         controller:'CreationCtrl' 

     })
     .state('projectcreationsave',{
    	  url:'/projectcreationsave/:pcid',
         templateUrl:'partials/projectCreationSave.html', 
        controller:'CreationCtrl' 
     })
       .state('budgetList',{
    	   resolve:{
   			'check':function($q, $location, $rootScope){
   				var defered = $q.defer();
   			if(!$rootScope.user){
   				defered.reject();
   			$location.path('/');
   			
   					}else{
   						defered.resolve(true);
   					}
   			return defered.promise;
   				}
   			},
    	  url:'/budgetList',
         templateUrl:'partials/budgetTable.html', 
         controller:'budgetCtrl' 
     })
      .state('budgetAdd',{
    	  url:'/budgetAdd',
         templateUrl:'partials/budgetAdd.html', 
         controller:'budgetCtrl' 
     })
      .state('budgetEdit',{
    	  url:'/budgetEdit/:bdid',
         templateUrl:'partials/budgetEdit.html', 
         controller:'budgetCtrl' 
     })
     .state('employeeTable',{
	    url:'/employeeTable',
	    templateUrl:'partials/employeeTable.html',
	    controller:"employeCtrl"
	})
	.state('addEmployee',{
		resolve:{
			'check':function($q, $location, $rootScope){
				var defered = $q.defer();
			if(!$rootScope.user){
				defered.reject();
			$location.path('/');
			
					}else{
						defered.resolve(true);
					}
			return defered.promise;
				}
			},
	    url:'/addEmployee',
	    templateUrl:'partials/employeeAdd.html',
	    controller:"employeCtrl"
	})
	.state('employeeView',{
	    url:'/employeeView/:eId',
	    templateUrl:'partials/employeeView.html',
	    controller:"employeCtrl"
	})
	.state('employeeEdit',{
	    url:'/employeeEdit/:eId',
	    templateUrl:'partials/employeeEdit.html',
	    controller:"employeCtrl"
	})
	.state('basicinfo',{
	    url:'/basicinfo',
	    templateUrl:'partials/empbasicinfo.html',
	    controller:"employeCtrl"
	})
	.state('addinfo',{
	    url:'/basicinfo.addinfo',
	    templateUrl:'partials/empaddInfo.html',
	    controller:"employeCtrl"
	})
	.state('jobinfo',{
	    url:'/jobinfo',
	    templateUrl:'partials/empjobInfo.html',
	    controller:"employeCtrl"
	})
	.state('kye',{
	    url:'/kye',
	    templateUrl:'partials/empKYE.html',
	    controller:"employeCtrl"
	})
	.state('prevexp',{
	    url:'/prevexp',
	    templateUrl:'partials/empPrevExp.html',
	    controller:"employeCtrl"
	})
	.state('qualification',{
	    url:'/qualification',
	    templateUrl:'partials/empQualification.html',
	    controller:"employeCtrl"
	})
	.state('salary',{
	    url:'/salary',
	    templateUrl:'partials/empSalary.html',
	    controller:"employeCtrl"
	})
	.state('insurance',{
	    url:'/insurance',
	    templateUrl:'partials/empInsurance.html',
	    controller:"employeCtrl"
	})
	/*.state('employeeKyc',{
	    url:'/employeeKyc/:employeeKycId',
	    templateUrl:'partials/employeeKyc.html',
	    controller:"employeCtrl"
	})*/
	
	/*
	.state('customerTable',{
		resolve:{
			'check':function($q, $location, $rootScope){
				var defered = $q.defer();
			if(!$rootScope.user){
				defered.reject();
			$location.path('/');
			
					}else{
						defered.resolve(true);
					}
			return defered.promise;
				}
			},
	    url:'/customerTable',
	    templateUrl:'partials/Customer.html',
	    	controller:'customerctrl'
	})
	.state('customerAdd',{
	    url:'/customerAdd',
	    templateUrl:'partials/CustomerAdd.html',
	    	controller:'customerctrl'
	})
      .state('customerEdit',{
	    url:'/customerEdit/:cuId',
	    templateUrl:'partials/CustomerEdit.html',
	    	controller:'customerctrl'
	})*/
	.state('locationTable',{
		resolve:{
			'check':function($q, $location, $rootScope){
				var defered = $q.defer();
			if(!$rootScope.user){
				defered.reject();
			$location.path('/');
			
					}else{
						defered.resolve(true);
					}
			return defered.promise;
				}
			},
	    url:'/locationTable',
	    templateUrl:'partials/location.html',
	    	controller:'locationctrl'
	})
	.state('locationAdd',{
	    url:'/locationAdd',
	    templateUrl:'partials/locationAdd.html',
	    controller:'locationctrl'
	    	
	})
	.state('locationEdit',{
	    url:'/locationEdit/:locationId',
	    templateUrl:'partials/locationEdit.html',
	    	controller:'locationctrl'
	})
	.state('bondTypeTable',{
		resolve:{
			'check':function($q, $location, $rootScope){
				var defered = $q.defer();
			if(!$rootScope.user){
				defered.reject();
			$location.path('/');
			
					}else{
						defered.resolve(true);
					}
			return defered.promise;
				}
			},
	   	 url:'/bondTypeTable',
	         templateUrl:'partials/bondTypeTable.html',
	         controller:"bondTypeCtrl"
	     })
	      .state('bondTypeAdd',{
	   	 url:'/bondTypeAdd',
	         templateUrl:'partials/bondTypeAdd.html',
	         controller:"bondTypeCtrl"
	     })
	      .state('bondTypeEdit',{
	    	  url:'/bondTypeEdit/:bondId',
	         templateUrl:'partials/bondTypeEdit.html',
	         controller:"bondTypeCtrl"
	     })
	     .state('projectStatusTable',{
	    	 resolve:{
	 			'check':function($q, $location, $rootScope){
	 				var defered = $q.defer();
	 			if(!$rootScope.user){
	 				defered.reject();
	 			$location.path('/');
	 			
	 					}else{
	 						defered.resolve(true);
	 					}
	 			return defered.promise;
	 				}
	 			},
		   	 url:'/projectStatusTable',
		         templateUrl:'partials/projectStatusTable.html',
		         controller:"projectStatusCtrl"
		     })
		      .state('projectStatusAdd',{
		   	 url:'/projectStatusAdd',
		         templateUrl:'partials/projectStatusAdd.html',
		         controller:"projectStatusCtrl"
		     })
		      .state('projectStatusEdit',{
		    	  url:'/projectStatusEdit/:statusId',
		         templateUrl:'partials/projectStatusEdit.html',
		         controller:"projectStatusCtrl"
		     })
		     .state('employeeTypeTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/employeeTypeTable',
		         templateUrl:'partials/employeeTypeTable.html',
		         controller:"employeeTypeCtrl"
		     })
		      .state('employeeTypeAdd',{
		   	 url:'/employeeTypeAdd',
		         templateUrl:'partials/employeeTypeAdd.html',
		         controller:"employeeTypeCtrl"
		     })
		      .state('employeeTypeEdit',{
		    	  url:'/employeeTypeEdit/:empId',
		         templateUrl:'partials/employeeTypeEdit.html',
		         controller:"employeeTypeCtrl"
		     })
		     .state('educationDetailsTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/educationDetailsTable',
		         templateUrl:'partials/educationDetailsTable.html',
		         controller:"educationDetailsCtrl"
		     })
		      .state('educationDetailsAdd',{
		   	 url:'/educationDetailsAdd',
		         templateUrl:'partials/educationDetailsAdd.html',
		         controller:"educationDetailsCtrl"
		     })
		      .state('educationDetailsEdit',{
		    	  url:'/educationDetailsEdit/:educationId',
		         templateUrl:'partials/educationDetailsEdit.html',
		         controller:"educationDetailsCtrl"
		     })
		     .state('customerContactTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/customerContactTable',
		         templateUrl:'partials/customerContactTable.html',
		         controller:"customerContactCtrl"
		     })
		      .state('customerContactAdd',{
		   	 url:'/customerContactAdd',
		         templateUrl:'partials/customerContactAdd.html',
		         controller:"customerContactCtrl"
		     })
		      .state('customerContactEdit',{
		    	  url:'/customerContactEdit/:cusCId',
		         templateUrl:'partials/customerContactEdit.html',
		         controller:"customerContactCtrl"
		     })
		     .state('customerDefTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/customerDefTable',
		         templateUrl:'partials/customerDefTable.html',
		         controller:"customerDefCtrl"
		     })
		      .state('customerDefAdd',{
		   	 url:'/customerDefAdd',
		         templateUrl:'partials/customerDefAdd.html',
		         controller:"customerDefCtrl"
		     })
		      .state('customerDefEdit',{
		    	  url:'/customerDefEdit/:cusDId',
		         templateUrl:'partials/customerDefEdit.html',
		         controller:"customerDefCtrl"
		     })
		     .state('customerAddressTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/customerAddressTable',
		         templateUrl:'partials/customerAddressTable.html',
		         controller:"customerAddressCtrl"
		     })
		      .state('customerAddressAdd',{
		   	 url:'/customerAddressAdd',
		         templateUrl:'partials/customerAddressAdd.html',
		         controller:"customerAddressCtrl"
		     })
		      .state('customerAddressEdit',{
		    	  url:'/customerAddressEdit/:addressId',
		         templateUrl:'partials/customerAddressEdit.html',
		         controller:"customerAddressCtrl"
		     })
		     .state('customerAddressTypeTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/customerAddressTypeTable',
		         templateUrl:'partials/customerAddressTypeTable.html',
		         controller:"customerAddressTypeCtrl"
		     })
		      .state('customerAddressTypeAdd',{
		   	 url:'/customerAddressTypeAdd',
		         templateUrl:'partials/customerAddressTypeAdd.html',
		         controller:"customerAddressTypeCtrl"
		     })
		      .state('customerAddressTypeEdit',{
		    	  url:'/customerAddressTypeEdit/:cusAdrsTypeId',
		         templateUrl:'partials/customerAddressTypeEdit.html',
		         controller:"customerAddressTypeCtrl"
		     })
		      .state('bgvVendorTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/bgvVendorTable',
		         templateUrl:'partials/bgvVendorTable.html',
		         controller:"bgvVendorCtrl"
		     })
		      .state('bgvVendorAdd',{
		   	 url:'/bgvVendorAdd',
		         templateUrl:'partials/bgvVendorAdd.html',
		         controller:"bgvVendorCtrl"
		     })
		      .state('bgvVendorEdit',{
		    	  url:'/bgvVendorEdit',
		         templateUrl:'partials/bgvVendorEdit.html',
		         controller:"bgvVendorCtrl"
		     })
		      .state('bgvOwnerTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/bgvOwnerTable',
		         templateUrl:'partials/bgvOwnerTable.html',
		         controller:"bgvOwnerCtrl"
		     })
		      .state('bgvOwnerAdd',{
		   	 url:'/bgvOwnerAdd',
		         templateUrl:'partials/bgvOwnerAdd.html',
		         controller:"bgvOwnerCtrl"
		     })
		      .state('bgvOwnerEdit',{
		    	  url:'/bgvOwnerEdit/:bgvOId',
		         templateUrl:'partials/bgvOwnerEdit.html',
		         controller:"bgvOwnerCtrl"
		     })
		      .state('leavesAllowedTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/leavesAllowedTable',
		         templateUrl:'partials/leavesAllowedTable.html',
		         controller:"leaveAllowedCtrl"
		     })
		      .state('leavesAllowedAdd',{
		   	 url:'/leavesAllowedAdd',
		         templateUrl:'partials/leavesAllowedAdd.html',
		         controller:"leaveAllowedCtrl"
		     })
		      .state('leavesAllowedEdit',{
		    	  url:'/leavesAllowedEdit/:leavesId',
		         templateUrl:'partials/leavesAllowedEdit.html',
		         controller:"leaveAllowedCtrl"
		     })
		      .state('costRatioTable',{
		    	  resolve:{
		  			'check':function($q, $location, $rootScope){
		  				var defered = $q.defer();
		  			if(!$rootScope.user){
		  				defered.reject();
		  			$location.path('/');
		  			
		  					}else{
		  						defered.resolve(true);
		  					}
		  			return defered.promise;
		  				}
		  			},
		   	 url:'/costRatioTable',
		         templateUrl:'partials/costRatioTable.html',
		         controller:"costRatioCtrl"
		     })
		      .state('costRatioAdd',{
		   	 url:'/costRatioAdd',
		         templateUrl:'partials/costRatioAdd.html',
		         controller:"costRatioCtrl"
		     })
		      .state('costRatioEdit',{
		    	  url:'/costRatioEdit/:cRId',
		         templateUrl:'partials/costRatioEdit.html',
		         controller:"costRatioCtrl"
		     })
		     .state('billingModelTable',{
		    	 resolve:{
		 			'check':function($q, $location, $rootScope){
		 				var defered = $q.defer();
		 			if(!$rootScope.user){
		 				defered.reject();
		 			$location.path('/');
		 			
		 					}else{
		 						defered.resolve(true);
		 					}
		 			return defered.promise;
		 				}
		 			},
		   	 url:'/billingModelTable',
		         templateUrl:'partials/billingModelTable.html',
		         controller:"billingModelCtrl"
		     })
		      .state('billingModelAdd',{
		   	 url:'/billingModelAdd',
		         templateUrl:'partials/billingModelAdd.html',
		         controller:"billingModelCtrl"
		     })
		      .state('billingModelEdit',{
		    	  url:'/billingModelEdit/:modelId',
		         templateUrl:'partials/billingModelEdit.html',
		         controller:"billingModelCtrl"
		     })
		     .state('contractPeriodTable',{
		    	 resolve:{
		 			'check':function($q, $location, $rootScope){
		 				var defered = $q.defer();
		 			if(!$rootScope.user){
		 				defered.reject();
		 			$location.path('/');
		 			
		 					}else{
		 						defered.resolve(true);
		 					}
		 			return defered.promise;
		 				}
		 			},
		   	 url:'/contractPeriodTable',
		         templateUrl:'partials/contractPeriodTable.html',
		         controller:"contractPeriodCtrl"
		     })
		      .state('contractPeriodAdd',{
		   	 url:'/contractPeriodAdd',
		         templateUrl:'partials/contractPeriodAdd.html',
		         controller:"contractPeriodCtrl"
		     })
		      .state('contractPeriodEdit',{
		    	  url:'/contractPeriodEdit/:contractId',
		         templateUrl:'partials/contractPeriodEdit.html',
		         controller:"contractPeriodCtrl"
		     })
		     .state('seperationTypeTable',{
		    	 resolve:{
		 			'check':function($q, $location, $rootScope){
		 				var defered = $q.defer();
		 			if(!$rootScope.user){
		 				defered.reject();
		 			$location.path('/');
		 			
		 					}else{
		 						defered.resolve(true);
		 					}
		 			return defered.promise;
		 				}
		 			},
		   	 url:'/seperationTypeTable',
		         templateUrl:'partials/seperationTypeTable.html',
		         controller:"seperationTypeCtrl"
		     })
		      .state('seperationTypeAdd',{
		   	 url:'/seperationTypeAdd',
		         templateUrl:'partials/seperationTypeAdd.html',
		         controller:"seperationTypeCtrl"
		     })
		      .state('seperationTypeEdit',{
		    	  url:'/seperationTypeEdit/:seperateId',
		         templateUrl:'partials/seperationTypeEdit.html',
		         controller:"seperationTypeCtrl"
		     })
		     .state('contactTypeTable',{
		    	 resolve:{
			 			'check':function($q, $location, $rootScope){
			 				var defered = $q.defer();
			 			if(!$rootScope.user){
			 				defered.reject();
			 			$location.path('/');
			 			
			 					}else{
			 						defered.resolve(true);
			 					}
			 			return defered.promise;
			 				}
			 			},
		   	 url:'/contactTypeTable',
		         templateUrl:'partials/contactTypeTable.html',
		         controller:"contactTypeCtrl"
		     })
		      .state('contactTypeAdd',{
		   	 url:'/contactTypeAdd',
		         templateUrl:'partials/contactTypeAdd.html',
		         controller:"contactTypeCtrl"
		     })
		      .state('contactTypeEdit',{
		    	  url:'/contactTypeEdit/:contId',
		         templateUrl:'partials/contactTypeEdit.html',
		         controller:"contactTypeCtrl"
		     
		      })
		      .state('proTechStackTable',{
		    	 resolve:{
			 			'check':function($q, $location, $rootScope){
			 				var defered = $q.defer();
			 			if(!$rootScope.user){
			 				defered.reject();
			 			$location.path('/');
			 			
			 					}else{
			 						defered.resolve(true);
			 					}
			 			return defered.promise;
			 				}
			 			},
		   	 url:'/proTechStackTable',
		         templateUrl:'partials/proTechStackTable.html',
		         controller:"proTechStackCtrl"
		     })
		      .state('proTechStackAdd',{
		   	 url:'/proTechStackAdd',
		         templateUrl:'partials/proTechStackAdd.html',
		         controller:"proTechStackCtrl"
		     })
		      .state('proTechStackEdit',{
		    	  url:'/proTechStackEdit/:proId',
		         templateUrl:'partials/proTechStackEdit.html',
		         controller:"proTechStackCtrl"
		     
		      })
		      $httpProvider.interceptors.push(function ($q, $rootScope, $location) {
		    	    return {
		    	        'request': function (config) {
		    	            var isRestCall = config.url.indexOf('rest') == 0;
		    	            if (isRestCall && angular.isDefined($rootScope.accessToken)) {
		    	                var accessToken = $rootScope.accessToken;
		    	                var Config = {
		    	                		/* When set to false a query parameter is used to pass on the access token.
		    	                		* This might be desirable if headers don't work correctly in some
		    	                		* environments and is still secure when using https. */
		    	                		useAccessTokenHeader: true,
		    	                		debug: true
		    	                		};
		    	                if (Config.useAccessTokenHeader) {
		    	                    config.headers['X-Access-Token'] = accessToken;
		    	                } else {
		    	                    config.url = config.url + "?token=" + accessToken;
		    	                }
		    	            }
		    	            return config || $q.when(config);
		    	        }
		    	    };
		    	}

		    	);
})
