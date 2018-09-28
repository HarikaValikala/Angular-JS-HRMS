hrmsApp.factory('HrmsService',["$http","$q",function($http,$q){
    return{
     /*login_auth: function(login){
           var deferred =$q.defer();
           var config ={
        		   headers :
                   {
                		   'Content-Type': 'application/x-www-form-urlencoded'
                			   }
           }
           
           $http.post("http://localhost:8080/hrms/rest/user/authenticate",login, config).success(function(response){
               deferred.resolve(response);
           }).error(function(err){
               deferred.reject(err);
            })
          return deferred.promise;
        },*/
        costCenterList:function(){
        	debugger;
        	var deffered=$q.defer();
        	$http.get("http://localhost:8080/hrms/rest/costcenter/findAll").success(function(response){
        		deffered.resolve(response);
        	}).error(function(err){
        		deffered.reject(err);
        	})
        	return deffered.promise;
        },
        costAdvancedSearch:function(costcenter){
        	debugger;
        	var deffered=$q.defer();
        	$http.get("http://localhost:8080/hrms/rest/costcenter/filterCostCenter/"+costcenter).success(function(response){
        		deffered.resolve(response);
        	}).error(function(err){
        		deffered.reject(err);
        	})
        	return deffered.promise;
        },
        costCenterAdd : function(costCenter){
        	debugger;
        	var deffered=$q.defer();
        	$http.post("http://localhost:8080/hrms/rest/costcenter/create",costCenter).success(function(response){
        		deffered.resolve(response);
        	}).error(function(err){
        		deffered.reject(err);
        	})        	
        	return deffered.promise;
      },
      costGetById : function(id){
      	debugger;
      	var deffered=$q.defer();
      	$http.get("http://localhost:8080/hrms/rest/costcenter/findById/"+id).success(function(response){
      		deffered.resolve(response);
      	}).error(function(err){
      		deffered.reject(err);
      	})        	
      	return deffered.promise;
    },
    costCenterEdit : function(costget){
    	  debugger;
    	  var deffered = $q.defer();
    	  $http.put("http://localhost:8080/hrms/rest/costcenter/update/"+costget.id,costget).success(function(response){
    		  deffered.resolve(response);
    	  }).error(function(err){
    		  deffered.reject(err);
    	  })
    	  return deffered.promise;
      },
      costdeleteRow : function(id){
 		  debugger;
 		  var deffered = $q.defer();
 		  $http.delete("http://localhost:8080/hrms/rest/costcenter/delete/"+id).success(function(response){
 			  deffered.resolve(response);
 		  }).error(function(err){
 			  deffered.reject(err);
 		  })
 		  return deffered.promise;
 	  },
 	 costpagenation : function(pageIndex,pageSizeSelected){
		   debugger
		   var deffered = $q.defer(); 
		   $http.get("http://localhost:8080/hrms/rest/costcenter/allcostcenters/" + pageIndex + "/" + pageSizeSelected).success(function(response){
			   deffered.resolve(response);
		   }).error(function(err){
			    deffered.resolve(err);
		   })
		   return deffered.promise;
	   },
      Businessunitlist:function(){
      	debugger;
      	var deffered=$q.defer();
      	$http.get("http://localhost:8080/hrms/rest/businessUnit/findAll").success(function(response){
      		deffered.resolve(response);
      	}).error(function(err){
      		deffered.reject(err);
      	})
      	return deffered.promise;
      },
      businesspost: function(businessU){
			debugger;
			var deferred = $q.defer();
			$http.post('http://localhost:8080/hrms/rest/businessUnit/add',businessU).success(function(response){
				deferred.resolve(response);
			}).error(function(err){
				deferred.reject(err);
			})
			return deferred.promise;
		},
		BusinessGetById : function(id){
		      	debugger;
		      	var deffered=$q.defer();
		      	$http.get("http://localhost:8080/hrms/rest/businessUnit/findByPrimaryKey/"+id).success(function(response){
		      		deffered.resolve(response);
		      	}).error(function(err){
		      		deffered.reject(err);
		      	})        	
		      	return deffered.promise;
		    },
		    BusinessunitEdit : function(id,business){
		    	  debugger;
		    	  var deffered = $q.defer();
		    	  $http.put("http://localhost:8080/hrms/rest/businessUnit/update/"+id,business).success(function(response){
		    		  deffered.resolve(response);
		    	  }).error(function(err){
		    		  deffered.reject(err);
		    	  })
		    	  return deffered.promise;
		      },
		      busSearch : function(search){
				   debugger;
				   var deffered = $q.defer(); 
				   $http.get("http://localhost:8080/hrms/rest/businessUnit/findByName/"+search).success(function(response){
				 
					   deffered.resolve(response);
				   }).error(function(err){
					   deffered.resolve(err);
				   })
				   return deffered.promise;
			   },
		      Businessunitlist:function(){
		        	debugger;
		        	var deffered=$q.defer();
		        	$http.get("http://localhost:8080/hrms/rest/businessUnit/findAll").success(function(response){
		        		deffered.resolve(response);
		        	}).error(function(err){
		        		deffered.reject(err);
		        	})
		        	return deffered.promise;
		        },
		        BudeleteRow : function(id){
					  debugger;
					  var deffered = $q.defer();
					  $http.delete("http://localhost:8080/hrms/rest/businessUnit/detele/"+id).success(function(response){
						  deffered.resolve(response);
					  }).error(function(err){
						  deffered.reject(err);
					  })
					  return deffered.promise;
				  },
			 	 buspagenation : function(pageIndex,pageSizeSelected){
					   debugger;
					   var deffered = $q.defer(); 
					   $http.get("http://localhost:8080/hrms/rest/businessUnit/all/" + pageIndex + "/" + pageSizeSelected).success(function(response){
						   deffered.resolve(response);
					   }).error(function(err){
						    deffered.resolve(err);
					   })
					   return deffered.promise;
				   },

      resourcegetList : function(){
    	  debugger;
    	  var deffered = $q.defer();
    	  	$http.get("http://localhost:8080/hrms/rest/resourcetype/findAll").success(function(response){
    	  		deffered.resolve(response);
    	  	}).error(function(err){
    	  		deffered.reject(err);
    	  	})
    	  	return deffered.promise;
    	  },
    	  resourcepost : function(resource){
    		  debugger;
    		  var deffered = $q.defer();
    		  $http.post("http://localhost:8080/hrms/rest/resourcetype/create",resource).success(function(response){
    			  deffered.resolve(response);
    		  }).error(function(err){
    			  deffered.reject(err);
    		  })
    		  return deffered.promise;
    	  },
    	  resourcegetById : function(id){
    		  debugger;
    		  var deffered = $q.defer();
    		  $http.get("http://localhost:8080/hrms/rest/resourcetype/find/"+id).success(function(response){
    			  deffered.resolve(response);
    		  }).error(function(err){
    			  deffered.reject(err);
    		  })
    		  return deffered.promise;
    	  },
    	  resourceEdit : function(resource){
    		  debugger;
    		  var deffered = $q.defer(); 
    		  $http.put("http://localhost:8080/hrms/rest/resourcetype/update/"+resource.id,resource).success(function(response){
    			deffered.resolve(response); 
    		  }).error(function(err){
    			  deffered.reject(err);
    		  })
    		  return deffered.promise;
    	  },
    	  resourceSearch:function(resource){
    		  debugger;
    		  var deffered = $q.defer(); 
    		  $http.get("http://localhost:8080/hrms/rest/resourcetype/findByName/"+resource).success(function(response){
    			deffered.resolve(response); 
    		  }).error(function(err){
    			  deffered.reject(err);
    		  })
    		  return deffered.promise;
    		  
    	  },
    	  resdeleteRow : function(id){
			  debugger;
			  var deffered = $q.defer();
			  $http.delete("http://localhost:8080/hrms/rest/resourcetype/delete/"+id).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
	 	 respagenation : function(pageIndex,pageSizeSelected){
			   debugger
			   var deffered = $q.defer(); 
			   $http.get("http://localhost:8080/hrms/rest/resourcetype/allbypaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
				   deffered.resolve(response);
			   }).error(function(err){
				    deffered.resolve(err);
			   })
			   return deffered.promise;
		   },
    	   teamgetList : function(){
    		   debugger
    		   var deffered = $q.defer(); 
    		   $http.get("http://localhost:8080/hrms/rest/team/findAllTeam").success(function(response){
    			   deffered.resolve(response);
    		   }).error(function(err){
    			    deffered.resolve(err);
    		   })
    		   return deffered.promise;
    	   },
    	   teampostList:function(team){
    		   debugger;
    		   var deffered = $q.defer();
    		   $http.post("http://localhost:8080/hrms/rest/team/addTeamResource",team).success(function(response){
    			deffered.resolve(response);
    		   }).error(function(err){
    			    deffered.resolve(err);
    		   })
    		   return deffered.promise;
    	   },
    	   teamgetById:function(tid){
    		   debugger;
    		   var deffered = $q.defer();
    		   $http.get("http://localhost:8080/hrms/rest/team/findByTeamId/"+tid).success(function(response){
    			deffered.resolve(response);
    		   }).error(function(err){
    			    deffered.resolve(err);
    		   })
    		   return deffered.promise;
    	   },
    	   dropdowngetlist : function(id){
    			 debugger;
    			 var deffered = $q.defer();
    			 $http.get("http://localhost:8080/hrms/rest/subbusinessunit/getSubBusinessUnitListByBusinessunitId/"+id).success(function(response){
    				 deffered.resolve(response);
    			 }).error(function(err){
    				 deffered.reject(err);
    			 })
    			 return deffered.promise;
    		 },
    	  /* teamEditList : function(id,team){
    		   	  debugger;
    		   	  var deffered = $q.defer();
    		   	  $http.put("http://localhost:8080/hrms/rest/team/updateTeam/"+id,team).success(function(response){
    		   		  deffered.resolve(response);
    		   	  }).error(function(err){
    		   		  deffered.reject(err);
    		   	  })
    		   	  return deffered.promise;
    		     },
    	   teamdeleteRow : function(id){
    			  debugger;
    			  var deffered = $q.defer();
    			  $http.delete("http://localhost:8080/hrms/rest/team/deleteTeamResource/"+id).success(function(response){
    				   deffered.resolve(response);
    			   }).error(function(err){
    				  deffered.reject(err);
    			   })
    			  return deffered.promise;
    			  },
    			  teampagenation : function(pageIndex,pageSizeSelected){
    				   debugger
    				   var deffered = $q.defer(); 
    				   $http.get("http://localhost:8080/hrms/rest/team/paging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
    					   deffered.resolve(response);
    				   }).error(function(err){
    					    deffered.resolve(err);
    				   })
    				   return deffered.promise;
    			   },*/
    	   subbusinesspost: function(sbuObj){
   			debugger;
   			var deferred = $q.defer();
   			$http.post("http://localhost:8080/hrms/rest/subbusinessunit/save",sbuObj).success(function(response){
   				deferred.resolve(response);
   			}).error(function(err){
   				deferred.reject(err);
   			})
   			return deferred.promise;
   		},
   		
   		sbUnitList : function(){
		   debugger
		   var deffered = $q.defer(); 
		   $http.get("http://localhost:8080/hrms/rest/subbusinessunit/findAll").success(function(response){
			   deffered.resolve(response);
		   }).error(function(err){
			    deffered.resolve(err);
		   })
		   return deffered.promise;
	   },
	   subusinessGetById : function(id){
 		  debugger;
 		  var deffered = $q.defer();
 		  $http.get("http://localhost:8080/hrms/rest/subbusinessunit/getById/"+id).success(function(response){
 			  deffered.resolve(response);
 		  }).error(function(err){
 			  deffered.reject(err);
 		  })
 		  return deffered.promise;
 	  },
 	subusinessEditList : function(id,subbusiness){
   	  debugger;
   	  var deffered = $q.defer();
   	  $http.put("http://localhost:8080/hrms/rest/subbusinessunit/update/"+id,subbusiness).success(function(response){
   		  deffered.resolve(response);
   	  }).error(function(err){
   		  deffered.reject(err);
   	  })
   	  return deffered.promise;
     },
     sbudeleteRow : function(id){
		  debugger;
		  var deffered = $q.defer();
		  $http.delete("http://localhost:8080/hrms/rest/subbusinessunit/deleteById/"+id).success(function(response){
			  deffered.resolve(response);
		  }).error(function(err){
			  deffered.reject(err);
		  })
		  return deffered.promise;
	  },
	  sbuspagenation : function(pageIndex,pageSizeSelected){
		   debugger;
		   var deffered = $q.defer();  
		   $http.get("http://localhost:8080/hrms/rest/subbusinessunit/pagination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
			   deffered.resolve(response);
		   }).error(function(err){
			    deffered.resolve(err);
		   })
		   return deffered.promise;
	   },
	   sbuSearch : function(search){
		   debugger;
		   var deffered = $q.defer(); 
		   $http.get("http://localhost:8080/hrms/rest/subbusinessunit/findBySubBusinessUnitName/"+search).success(function(response){
		 
			   deffered.resolve(response);
		   }).error(function(err){
			   deffered.resolve(err);
		   })
		   return deffered.promise;
	   },
	   designationList : function(){
		   debugger;
		   var deffered = $q.defer(); 
		   $http.get("http://localhost:8080/hrms/rest/Designation/findAllDesignation").success(function(response){
			   deffered.resolve(response);
		   }).error(function(err){
			    deffered.resolve(err);
		   })
		   return deffered.promise;
	   },


         designationPost : function(designationObj){
		   debugger;
  			var deferred = $q.defer();
  			$http.post("http://localhost:8080/hrms/rest/Designation/saveDesignation",designationObj).success(function(response){
  				deferred.resolve(response);
  			}).error(function(err){
  				deferred.reject(err);
  			})
  			return deferred.promise;
	   },
	   designationGetbyId : function(id){
		   debugger;
  			var deferred = $q.defer();
  			$http.get("http://localhost:8080/hrms/rest/Designation/findDesignationById/"+id).success(function(response){
  				deferred.resolve(response);
  			}).error(function(err){
  				deferred.reject(err);
  			})
  			return deferred.promise;
	   },
	   designationEditList : function(desigEditObj){
		   	  debugger;
		   	  var deffered = $q.defer();
		   	  $http.put("http://localhost:8080/hrms/rest/Designation/update/"+desigEditObj.id,desigEditObj).success(function(response){
		   		  deffered.resolve(response);
		   	  }).error(function(err){
		   		  deffered.reject(err);
		   	  })
		   	  
		   	  return deffered.promise;
		     },
		     pagenation : function(pageIndex,pageSizeSelected){
				   debugger;
				   var deffered = $q.defer(); 
				   $http.get("http://localhost:8080/hrms/rest/Designation/all/" + pageIndex + "/" + pageSizeSelected).success(function(response){
					   deffered.resolve(response);
				   }).error(function(err){
					    deffered.resolve(err);
				   })
				   return deffered.promise;
			   },
     
		     desdeleteRow : function(id){
			  debugger;
			  var deffered = $q.defer();
			  $http.delete("http://localhost:8080/hrms/rest/Designation/delete/"+id).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  desigsublist : function(id){
			  debugger;
			  var deffered = $q.defer();
			  $http.get("http://localhost:8080/hrms/rest/Designation/findDesignationBysubBusinessUnitId/"+id).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  searchDesignation : function(search){
			debugger;
			var deffered = $q.defer();
			  $http.get("http://localhost:8080/hrms/rest/Designation/findDesignationByname/"+search).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  TeamDropdown : function(id){
			  debugger;
			  var deffered = $q.defer();
			  $http.get("http://localhost:8080/hrms/rest/Designation/findDesignationByTeamId/"+id).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  teamSearch:function(team){
			  debugger;
			  var deffered = $q.defer();
			  $http.get(" http://localhost:8080/hrms/rest/team/findByteamName/"+team).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
			 
		  },
		  projectGetlist:function(){
			  debugger;
			  var deffered = $q.defer();
			  $http.get("http://localhost:8080/hrms/rest/projectType/findAll").success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  projectPostlist : function(pjtDetails){
			  debugger;
			  var deffered = $q.defer();
			  $http.post("http://localhost:8080/hrms/rest/projectType/saveProjectType",pjtDetails).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  projectGetById : function(id){
			  debugger;
			  var deffered = $q.defer();
			  $http.get("http://localhost:8080/hrms/rest/projectType/findByPrimaryKey/"+id).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  projectUpdate : function(pjtEditDetails){
			  debugger;
			  var deffered = $q.defer();
			  $http.put("http://localhost:8080/hrms/rest/projectType/update/"+pjtEditDetails.id,pjtEditDetails).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;

		  },
		  projectDelete:function(id){
			  debugger;
			  var deffered = $q.defer();
			  $http.delete("http://localhost:8080/hrms/rest/projectType/deleteProjectTypeByPrimarykey/"+id).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
			  
		  },
		  projectSearch:function(projectType){
			  ebugger;
			  var deffered = $q.defer();
			  $http.get("http://localhost:8080/hrms/rest/projectType/findByProjectTypeName/"+projectType).success(function(response){
				  deffered.resolve(response);
			  }).error(function(err){
				  deffered.reject(err);
			  })
			  return deffered.promise;
		  },
		  /*projectCreationPost:function(project){
			debugger;
		  var deffered = $q.defer();
		  $http.post("http://localhost:8080/hrms/rest/project/create",project).success(function(response){
			  deffered.resolve(response);
		  }).error(function(err){
			  deffered.reject(err);
		  })
		  return deffered.promise;
		  },*/
		  locationfindall : function(){
			   debugger
			   var deffered = $q.defer(); 
			   $http.get("http://localhost:8080/hrms/rest/location/findAll").success(function(response){
				   deffered.resolve(response);
			   }).error(function(err){
				    deffered.resolve(err);
			   })
			   return deffered.promise;
		   },


		   locationpost : function(loobj){
			   debugger;
	  			var deferred = $q.defer();
	  			$http.post("http://localhost:8080/hrms/rest/location/add",loobj).success(function(response){
	  				deferred.resolve(response);
	  			}).error(function(err){
	  				deferred.reject(err);
	  			})
	  			return deferred.promise;
		   },
		   locationgetById : function(id){
			   debugger;
	  			var deferred = $q.defer();
	  			$http.get("http://localhost:8080/hrms/rest/location/find/"+id).success(function(response){
	  				deferred.resolve(response);
	  			}).error(function(err){
	  				deferred.reject(err);
	  			})
	  			return deferred.promise;
		   },
		   locationEdit : function(locatlist){
			   	  debugger;
			   	  var deffered = $q.defer();
			   	  $http.put("http://localhost:8080/hrms/rest/location/update/"+locatlist.id,locatlist).success(function(response){
			   		  deffered.resolve(response);
			   	  }).error(function(err){
			   		  deffered.reject(err);
			   	  })
			   	  return deffered.promise;
			     },
			     locationSearch : function(search){
					   debugger;
					   var deffered = $q.defer(); 
					   $http.get("http://localhost:8080/hrms/rest/location/findByName/"+search).success(function(response){
					 
						   deffered.resolve(response);
					   }).error(function(err){
						   deffered.resolve(err);
					   })
					   return deffered.promise;
				   },
			     locationpagination : function(pageIndex,pageSizeSelected){
					   debugger;
					   var deffered = $q.defer(); 
					   $http.get("http://localhost:8080/hrms/rest/location/paging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
						   deffered.resolve(response);
					   }).error(function(err){
						    deffered.resolve(err);
					   })
					   return deffered.promise;
				   },
	     
				   locdeleteRow : function(id){
				  debugger;
				  var deffered = $q.defer();
				  $http.delete("http://localhost:8080/hrms/rest/location/delete/"+id).success(function(response){
					  deffered.resolve(response);
				  }).error(function(err){
					  deffered.reject(err);
				  })
				  return deffered.promise;
			  },
			  /*customerFindall : function(){
				   debugger
				   var deffered = $q.defer(); 
				   $http.get("http://localhost:8080/hrms/rest/customer/getAllCustomers").success(function(response){
					   deffered.resolve(response);
				   }).error(function(err){
					    deffered.resolve(err);
				   })
				   return deffered.promise;
			   },


			   customerpost : function(cuObj){
				   debugger;
		  			var deferred = $q.defer();
		  			$http.post("http://localhost:8080/hrms/rest/customer/addCustomer",cuObj).success(function(response){
		  				deferred.resolve(response);
		  			}).error(function(err){
		  				deferred.reject(err);
		  			})
		  			return deferred.promise;
			   },
			   customerGetById : function(id){
				   debugger;
		  			var deferred = $q.defer();
		  			$http.get("http://localhost:8080/hrms/rest/customer/getCustomerById/"+id).success(function(response){
		  				deferred.resolve(response);
		  			}).error(function(err){
		  				deferred.reject(err);
		  			})
		  			return deferred.promise;
			   },
			   CustomerEdit : function(id,custlist){
				   	  debugger;
				   	  var deffered = $q.defer();
				   	  $http.put("http://localhost:8080/hrms/rest/customer/updateCustomerById/"+id,custlist).success(function(response){
				   		  deffered.resolve(response);
				   	  }).error(function(err){
				   		  deffered.reject(err);
				   	  })
				   	  return deffered.promise;
				     },
				     customerSearch : function(search){
						   debugger;
						   var deffered = $q.defer(); 
						   $http.get("http://localhost:8080/hrms/rest/customer/getByCustomerName/"+search).success(function(response){
						 
							   deffered.resolve(response);
						   }).error(function(err){
							   deffered.resolve(err);
						   })
						   return deffered.promise;
					   },

				     customerpagenation : function(pageIndex,pageSizeSelected){
						   debugger;
						   var deffered = $q.defer(); 
						   $http.get("http://localhost:8080/hrms/rest/customer/paging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
							   deffered.resolve(response);
						   }).error(function(err){
							    deffered.resolve(err);
						   })
						   return deffered.promise;
					   },
		     
					 custdeleteRow : function(id){
					  debugger;
					  var deffered = $q.defer();
					  $http.delete("http://localhost:8080/hrms/rest/customer/deleteCustomerById/"+id).success(function(response){
						  deffered.resolve(response);
					  }).error(function(err){
						  deffered.reject(err);
					  })
					  return deffered.promise;
				  },*/

				  	createProjectList:function(){
				  		debugger;
						  var deffered = $q.defer();
						  $http.get("http://localhost:8080/hrms/rest/project/findAll").success(function(response){
							  deffered.resolve(response);
						  }).error(function(err){
							  deffered.reject(err);
						  })
						  return deffered.promise;
				  	},
				  createProject : function(project){
					  debugger;
					  var deffered = $q.defer();
					  $http.post("http://localhost:8080/hrms/rest/project/create",project).success(function(response){
						  deffered.resolve(response);
					  }).error(function(err){
						  deffered.reject(err);
					  })
					  return deffered.promise;
				  },
				  creationgetbyId:function(id){
					  debugger;
					  var deffered = $q.defer();
					  $http.get("http://localhost:8080/hrms/rest/project/find/"+id).success(function(response){
						  deffered.resolve(response);
					  }).error(function(err){
						  deffered.reject(err);
					  })
					  return deffered.promise;
				  },
				  creationUpdate:function(updatecreationList){
					  debugger;
					  var deffered = $q.defer();
					  $http.put("http://localhost:8080/hrms/rest/project/update/"+updatecreationList.id,updatecreationList).success(function(response){
						  deffered.resolve(response);
					  }).error(function(err){
						  deffered.reject(err);
					  })
					  return deffered.promise;
					  
				  },
				  bondTypeGetAll : function(){
						debugger;
						var deferred = $q.defer();
						$http.get("http://localhost:8080/hrms/rest/bondType/findAll").success(function(response){
							deferred.resolve(response);
						}).error(function(err){
							deferred.reject(err);
						})
						return deferred.promise;
					  },
					  bondTypeAddList : function(details){
						  debugger;
						  var deferred = $q.defer();
				  			$http.post("http://localhost:8080/hrms/rest/bondType/create",details).success(function(response){
				  				deferred.resolve(response);
				  			}).error(function(err){
				  				deferred.reject(err);
				  			})
				  			return deferred.promise;
					  },
					  bondTypePagination : function(pageIndex,pageSizeSelected){
						   debugger;
						   var deffered = $q.defer(); 
						   $http.get("http://localhost:8080/hrms/rest/bondType/allBondByPaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
							   deffered.resolve(response);
						   }).error(function(err){
							    deffered.resolve(err);
						   })
						   return deffered.promise;
					   },
					  bondTypeGetById : function(id){
							debugger;
							var deferred = $q.defer();
							$http.get("http://localhost:8080/hrms/rest/bondType/find/"+id).success(function(response){
								deferred.resolve(response);
							}).error(function(err){
								deferred.reject(err);
							})
							return deferred.promise;
						  },
					   bondTypeEdit : function(bondId,tag){
						   	  debugger;
						   	  var deffered = $q.defer();
						   	  $http.put("http://localhost:8080/hrms/rest/bondType/update/"+bondId,tag).success(function(response){
						   		  deffered.resolve(response);
						   	  }).error(function(err){
						   		  deffered.reject(err);
						   	  })
						   	  return deffered.promise;
					   },
					   bondTypeDeleteRow : function(id){
						  debugger;
						  var deffered = $q.defer();
						  $http.delete("http://localhost:8080/hrms/rest/bondType/delete/"+id).success(function(response){
							  deffered.resolve(response);
						  }).error(function(err){
							  deffered.reject(err);
						  })
						  return deffered.promise;

					  },
					  budgetList:function(){
						  debugger;
						  var deffered = $q.defer();
						  $http.get("http://localhost:8080/hrms/rest/budget/findAllBudgets").success(function(response){
							  deffered.resolve(response);
						  }).error(function(err){
							  deffered.reject(err);
						  })
						  return deffered.promise;
					  },
					  budgetPost : function(budDetails){
						  debugger;
						  var deffered = $q.defer();
						  $http.post("http://localhost:8080/hrms/rest/budget/save",budDetails).success(function(response){
							  deffered.resolve(response);
						  }).error(function(err){
							  deffered.reject(err);
						  })
						  return deffered.promise;
					  
					  },
					  budgetGetbyId: function(id){
						 debugger;
						 var deffered = $q.defer();
						 $http.get("http://localhost:8080/hrms/rest/budget/findById/"+id).success(function(response){
							  deffered.resolve(response);
						  }).error(function(err){
							  deffered.reject(err);
						  })
						  return deffered.promise;
					  },
					  budgetEdit:function(editDetails){
						  debugger;
							 var deffered = $q.defer();
							 $http.put("http://localhost:8080/hrms/rest/budget/update/"+editDetails.id,editDetails).success(function(response){
								  deffered.resolve(response);
							  }).error(function(err){
								  deffered.reject(err);
							  })
							  return deffered.promise; 
					  },
					  searchBondType : function(bond){
							debugger;
							var deffered = $q.defer();
							  $http.get("http://localhost:8080/hrms/rest/bondType/findByName/"+bond).success(function(response){
								  deffered.resolve(response);
							  }).error(function(err){
								  deffered.reject(err);
							  })
							  return deffered.promise;
						  },
					  empget : function(){
						   debugger;
						   var deffered = $q.defer(); 
						   $http.get("http://localhost:8080/hrms/rest/employee/findAll").success(function(response){
							   deffered.resolve(response);
						   }).error(function(err){
							    deffered.resolve(err);
						   })  
						   return deffered.promise;
					   },
					   employeePost : function(employee){
						   debugger;
				  			var deferred = $q.defer();
				  			$http.post("http://localhost:8080/hrms/rest/employee/create",employee).success(function(response){
				  				deferred.resolve(response);
				  			}).error(function(err){
				  				deferred.reject(err);
				  			})
				  			return deferred.promise;
					   },
					  
					   employeegetById : function(id){
						   debugger;
				  			var deferred = $q.defer();
				  			$http.get("http://localhost:8080/hrms/rest/employee/find/"+id).success(function(response){
				  				deferred.resolve(response);
				  			}).error(function(err){
				  				deferred.reject(err);
				  			})
				  			return deferred.promise;
					   },
					  employeeEditKyc : function(employee){
						   	  debugger;
						   	  var deffered = $q.defer();
						   	  $http.put("http://localhost:8080/hrms/rest/kyc/UpdateById/"+employee.id,employee).success(function(response){
						   		  deffered.resolve(response);
						   	  }).error(function(err){
						   		  deffered.reject(err);
						   	  })
						   	  return deffered.promise;
						     },
					   employeeEdit : function(employee){
						   	  debugger;
						   	  var deffered = $q.defer();
						   	  $http.put("http://localhost:8080/hrms/rest/employee/edit/"+employee.id,employee).success(function(response){
						   		  deffered.resolve(response);
						   	  }).error(function(err){
						   		  deffered.reject(err);
						   	  })
						   	  return deffered.promise;
						     },
						     emppagenation : function(pageIndex,pageSizeSelected){
								   debugger;
								   var deffered = $q.defer(); 
								   $http.get("http://localhost:8080/hrms/rest/employee/findByPagination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
									   deffered.resolve(response);
								   }).error(function(err){
									    deffered.resolve(err);
								   })
								   return deffered.promise;
							   },
							   empNameSearch : function(search){
								   debugger;
								   var deffered = $q.defer(); 
								   $http.get("http://localhost:8080/hrms/rest/employee/findByName/"+search).success(function(response){
								 
									   deffered.resolve(response);
								   }).error(function(err){
									   deffered.resolve(err);
								   })
								   return deffered.promise;
							   },
						     empdeleteRow : function(id){
								  debugger;
								  var deffered = $q.defer();
								  $http.delete("http://localhost:8080/hrms/rest/employee/delete/"+id).success(function(response){
									  deffered.resolve(response);
								  }).error(function(err){
									  deffered.reject(err);
								  })
								  return deffered.promise;
							  },
							  projectStatusGet : function(){
								  debugger;
								  var deffered =$q.defer();
								  $http.get("http://localhost:8080/hrms/rest/projectStatus/findAll").success(function(response){
									  deffered.resolve(response);
								  }).error(function(err){
									  deffered.reject(err);
								  })
								  return deffered.promise;
							  },
							  statusPagination : function(pageIndex,pageSizeSelected){
								   debugger;
								   var deffered = $q.defer(); 
								   $http.get("http://localhost:8080/hrms/rest/projectStatus/allByPage/" + pageIndex + "/" + pageSizeSelected).success(function(response){
									   deffered.resolve(response);
								   }).error(function(err){
									    deffered.resolve(err);
								   })
								   return deffered.promise;
							   },
							  projectStatusPost : function(statusObj){
								  debugger;
								  var deferred = $q.defer();
						  			$http.post("http://localhost:8080/hrms/rest/projectStatus/create",statusObj).success(function(response){
						  				deferred.resolve(response);
						  			}).error(function(err){
						  				deferred.reject(err);
						  			})
						  			return deferred.promise; 
							  },
							  statusGetById : function(statusId){
								  debugger;
							   	  var deffered = $q.defer();
							   	  $http.get("http://localhost:8080/hrms/rest/projectStatus/find/"+statusId).success(function(response){
							   		  deffered.resolve(response);
							   	  }).error(function(err){
							   		  deffered.reject(err);
							   	  })
							   	  return deffered.promise;
							  },
							  projectStatusEdit : function(ProObj){
								  debugger;
							   	  var deffered = $q.defer();
							   	  $http.put("http://localhost:8080/hrms/rest/projectStatus/update/"+ProObj.id,ProObj).success(function(response){
							   		  deffered.resolve(response);
							   	  }).error(function(err){
							   		  deffered.reject(err);
							   	  })
							   	  return deffered.promise;
							  },
							  projectStatusDelete : function(id){
								  debugger;
								  var deffered = $q.defer();
								  $http.delete("http://localhost:8080/hrms/rest/projectStatus/delete/"+id).success(function(response){
									  deffered.resolve(response);
								  }).error(function(err){
									  deffered.reject(err);
								  })
								  return deffered.promise;
							  },
							  statusSearch : function(search){
								   debugger;
								   var deffered = $q.defer(); 
								   $http.get("http://localhost:8080/hrms/rest/projectStatus/findByProjectStatus/created"+search).success(function(response){
									   deffered.resolve(response);
								   }).error(function(err){
									   deffered.resolve(err);
								   })
								   return deffered.promise;
							   },
							  contractGet : function(){
								  debugger;
								  var deffered =$q.defer();
								  $http.get("http://localhost:8080/hrms/rest/contractPeriod/findAll").success(function(response){
									  deffered.resolve(response);
								  }).error(function(err){
									  deffered.reject(err);
								  })
								  return deffered.promise;
							  },
							  contractPagination : function(pageIndex,pageSizeSelected){
								   debugger;
								   var deffered = $q.defer(); 
								   $http.get("http://localhost:8080/hrms/rest/contractPeriod/allContractPeriodsByPaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
									   deffered.resolve(response);
								   }).error(function(err){
									    deffered.resolve(err);
								   })
								   return deffered.promise;
							   },
							   contractPeriodPost : function(contactObj){
								  debugger;
								  var deferred = $q.defer();
						  			$http.post("http://localhost:8080/hrms/rest/contractPeriod/create",contactObj).success(function(response){
						  				deferred.resolve(response);
						  			}).error(function(err){
						  				deferred.reject(err);
						  			})
						  			return deferred.promise; 
							  },
							  contractGetById : function(contractId){
								  debugger;
							   	  var deffered = $q.defer();
							   	  $http.get("http://localhost:8080/hrms/rest/contractPeriod/find/"+contractId).success(function(response){
							   		  deffered.resolve(response);
							   	  }).error(function(err){
							   		  deffered.reject(err);
							   	  })
							   	  return deffered.promise;
							  },
							  contractPeriodEdit : function(periodObj){
								  debugger;
							   	  var deffered = $q.defer();
							   	  $http.put("http://localhost:8080/hrms/rest/contractPeriod/update/"+periodObj.id,periodObj).success(function(response){
							   		  deffered.resolve(response);
							   	  }).error(function(err){
							   		  deffered.reject(err);
							   	  })
							   	  return deffered.promise;
							  },
							  contractPeriodDelete : function(id){
								  debugger;
								  var deffered = $q.defer();
								  $http.delete("http://localhost:8080/hrms/rest/contractPeriod/delete/"+id).success(function(response){
									  deffered.resolve(response);
								  }).error(function(err){
									  deffered.reject(err);
								  })
								  return deffered.promise;
							  },
							  contractSearch : function(search){
								   debugger;
								   var deffered = $q.defer(); 
								   $http.get("http://localhost:8080/hrms/rest/contractPeriod/findContractPeriod/"+search).success(function(response){
									   deffered.resolve(response);
								   }).error(function(err){
									   deffered.resolve(err);
								   })
								   return deffered.promise;
							   },
							   empTypeGet : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/employeeType/findAll").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  empTypePagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/employeeType/allEmployeeTypeByPaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   empTypePost : function(empObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/employeeType/create",empObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  empGetById : function(empId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/employeeType/find/"+empId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  empTypeEdit : function(empTypeObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/employeeType/update/"+empTypeObj.id,empTypeObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  empTypeDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/contractPeriod/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								/*  empSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/contractPeriod/findContractPeriod/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   }*/
								  seperateTypeGet : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/seperationType/findAll").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  seperationTypePagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/seperationType/allByPage/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   seperationTypePost : function(seperateObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/seperationType/create",seperateObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  seperatationGetById : function(seperateId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/seperationType/find/"+seperateId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  seperationTypeEdit : function(typeObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/seperationType/update/"+typeObj.id,typeObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  seperationTypeDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/seperationType/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  seperationSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/seperationType/findByseperationTypeName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  billingGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/billing/findall").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  billingPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/billing/pagination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   billingModelPost : function(modelObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/billing/create",modelObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  billingGetById : function(modelId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/billing/find/"+modelId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  billingModelEdit : function(billObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/billing/update/"+billObj.id,billObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  billingRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/billing/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  billingSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/billing/findByBillingModelName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  cusContactGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/customerContact/getAllCustomerContact").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  cusContactPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/customerContact/findAllByPagination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   cusContactePost : function(cusObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/customerContact/addCustomerContact",cusObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  cusContactGetById : function(cusCId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/customerContact/getCustomerContactById/"+cusCId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  cusContactEdit : function(cusContactObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/customerContact/updateCustomerContactById/"+cusContactObj.id,cusContactObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  customerConatctDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/customerContact/deleteById/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  cusContactSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/customerContact/findByName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  contTypeGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/contactType/getAllContactTypes").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								 /* contPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/seperationType/allByPage/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },*/
								   contTypePost : function(contObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/contactType/addContacType ",contObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  contTypeGetById : function(contId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/contactType/getContactTypeById/"+contId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  contTypeEdit : function(cTypeObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/contactType/updateContactTypeById/"+cTypeObj.id,cTypeObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  contTypeRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/contactType/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  contTypeSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/contactType/getByContactType/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  cusDefGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/customer/getAllCustomer").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  cusDefPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/customer/pagingination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   cusDefPost : function(cusDObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/customer/addCustomer",cusDObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  cusDefGetById : function(cusDId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/customer/getCustomerById/"+cusDId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  cusDefEdit : function(cusDefObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/customer/updateCustomerById/"+cusDefObj.id,cusDefObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  cusDefRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/customer/deleteCustomerById/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  cusDefSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/customer/getByCustomerName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  projectTechGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/projectTechStack/findAll").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  projectTechPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/projectTechStack/allProjectTechStacksByPaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   projectTechPost : function(proObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/projectTechStack/create",proObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  projectTechGetById : function(proId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/projectTechStack/find/"+proId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  projectTechEdit : function(proTechObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/projectTechStack/update/"+proTechObj.id,proTechObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  projectTechDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/projectTechStack/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  projectTechSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/projectTechStack/findByName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  bgvOwnerGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/bgv/findall").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  bgvOwnerPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/bgv/pagination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   bgvOwnerPost : function(bgvObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/bgv/create",bgvObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  bgvOwnerGetById : function(bgvOId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/bgv/find/"+bgvOId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  bgvOwnerEdit : function(bgvOwObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/bgv/update/"+bgvOwObj.id,bgvOwObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  bgvOwnerRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/bgv/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  bgvOwnerSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/bgv/findByBGVOwnerName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  bgvVendorGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/bgvvendor/findall").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  bgvVendorPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/bgvvendor/pagination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   bgvVendorPost : function(bgvVObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/bgvvendor/create",bgvVObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  bgvVendorGetById : function(bgvVId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/bgvvendor/find/"+bgvVId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  bgvVendorEdit : function(bgvVenObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/bgvvendor/update"+bgvVenObj.id,bgvVenObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  bgvVendorRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/bgvvendor/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  bgvVendorSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/bgvvendor/findByBGVVendorName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  costRatioGetAll : function(){
									
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/costRatio/findAll").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  costRatioPagination : function(pageIndex,pageSizeSelected){
									   
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/costRatio/allCostRatioByPaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   costRatioPost : function(costObj){
								
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/costRatio/create",costObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  costRatioById : function(id){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/costRatio/find/"+id).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  costRatioEdit : function(id,costRget){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/costRatio/update/"+id,costRget).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  costRatiodeleteRow : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/costRatio/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  costRatioSearch : function(search){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/costRatio/findByName/"+search).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										   deffered.resolve(err);
									   })
									   return deffered.promise;
								   
								  },
								  leavesGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/leaveTypeResorce/findAll").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  leavesPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/leaveTypeResorce/allbypaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   leavesAllowedPost : function(leaveObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/leaveTypeResorce/create",leaveObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  leavesAllowedGetById : function(leavesId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/leaveTypeResorce/find/"+leavesId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  leavesAllowedEdit : function(leavesAllowObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/leaveTypeResorce/update/"+leavesAllowObj.id,leavesAllowObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  leavesAllowedRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/leaveTypeResorce/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  customerAddressGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/customerAddress/getAllCustomerAddress").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  customerAddressPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/customerAddress/pagingination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   customerAddressPost : function(addressObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/customerAddress/saveCustomerAddress",addressObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  customerAddressGetById : function(addressId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/customerAddress/getCustomerAddressById/"+addressId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  customerAddressEdit : function(customerObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/customerAddress/updateCustomerAdrressById/"+customerObj.id,customerObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  customerAddressRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/customerAddress/deleteCustomerAddressById/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  educationDetailsGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/eduDetails/findAll").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  
									  edutygr : function(){
										  debugger;
										  var deffered =$q.defer();
										  $http.get("http://localhost:8080/hrms/rest/eduDetails/findAll").success(function(response){
											  deffered.resolve(response);
										  }).error(function(err){
											  deffered.reject(err);
										  })
										  return deffered.promise;
									  },
								  educationDetailsPagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/eduDetails/allEducationDetailsByPaging/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   educationDetailsPost : function(educationObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/eduDetails/create",educationObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  educationDetailsGetById : function(educationId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/eduDetails/find/"+educationId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  educationDetailsEdit : function(educationDetailsObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/eduDetails/update/"+educationDetailsObj.id,educationDetailsObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  educationDetailsRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/eduDetails/delete/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  cusAddressTypeGetAll : function(){
									  debugger;
									  var deffered =$q.defer();
									  $http.get("http://localhost:8080/hrms/rest/customerAddressType/getAllCustomerAddressTypes").success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  },
								  cusAddressTypePagination : function(pageIndex,pageSizeSelected){
									   debugger;
									   var deffered = $q.defer(); 
									   $http.get("http://localhost:8080/hrms/rest/customerAddressType/pagingination/" + pageIndex + "/" + pageSizeSelected).success(function(response){
										   deffered.resolve(response);
									   }).error(function(err){
										    deffered.resolve(err);
									   })
									   return deffered.promise;
								   },
								   cusAddressTypePost : function(cusadrsObj){
									  debugger;
									  var deferred = $q.defer();
							  			$http.post("http://localhost:8080/hrms/rest/customerAddressType/addCustomerAddressType",cusadrsObj).success(function(response){
							  				deferred.resolve(response);
							  			}).error(function(err){
							  				deferred.reject(err);
							  			})
							  			return deferred.promise; 
								  },
								  cusAddressTypeGetById : function(cusAdrsTypeId){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.get("http://localhost:8080/hrms/rest/customerAddressType/getCustomerAddressTypeById/"+cusAdrsTypeId).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  cusAddressTypeEdit : function(cusadrssObj){
									  debugger;
								   	  var deffered = $q.defer();
								   	  $http.put("http://localhost:8080/hrms/rest/customerAddressType/updateCustomerAddressTypeById/"+cusadrssObj.id,cusadrssObj).success(function(response){
								   		  deffered.resolve(response);
								   	  }).error(function(err){
								   		  deffered.reject(err);
								   	  })
								   	  return deffered.promise;
								  },
								  cusAddressTypeRowDelete : function(id){
									  debugger;
									  var deffered = $q.defer();
									  $http.delete("http://localhost:8080/hrms/rest/customerAddressType/deleteCustomerAddressTypeById/"+id).success(function(response){
										  deffered.resolve(response);
									  }).error(function(err){
										  deffered.reject(err);
									  })
									  return deffered.promise;
								  }		
								  
      }
 }]);
 
