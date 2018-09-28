hrmsApp.controller('CreationCtrl',[
						"$scope",
						"$state",
						"HrmsService",
						"$stateParams",
						function($scope, $state, HrmsService, $stateParams) {
							$scope.$on('$viewContentLoaded', function() {
								// $scope.costgetList();
								$scope.projectList();
								$scope.customer();
								$scope.location();
								$scope.budgetList();
								$scope.project = {};
								$scope.projectgetList();
								$scope.creationGetByID();
								$scope.getEmployee();
								$scope.customer();
								$scope.status();
								$scope.EmployeeType();
								$scope.Billing();
								/*$scope.finalbudget();*/

							})
							$scope.projectList = function(pjtid) {
								$scope.projectId = pjtid;
								HrmsService.projectGetlist().then(
										function(data) {
											$scope.pjtlist = data.result;
											console.log($scope.pjtlist);
										}, function(err) {
											if (err) {
												$scope.errorMessage = err;
											} else {
												$scope.errorMessage = err;
											}
										})

							};
							$scope.customer = function(cusId) {
								$scope.customerId = cusId;
								HrmsService.customerFindall().then(
										function(data) {
											$scope.customerlist = data.result;
											//$scope.customerlist= JSON.parse($scope.custlist);
											console.log($scope.customerlist);
										}, function(err) {
											if (err) {
												$scope.errorMessage = err;
											} else {
												$scope.errorMessage = err;
											}
										})
							};
							$scope.location = function(locId) {
								$scope.locationId = locId;
								HrmsService.locationfindall().then(
										function(data) {
											$scope.locationlist = data.result;
											console.log($scope.locationlist);
										}, function(err) {
											if (err) {
												$scope.errorMessage = err;
											} else {
												$scope.errorMessage = err;
											}
										})
							};
							$scope.budgetList = function(budgetId) {
								$scope.budgetId = budgetId;
								HrmsService.budgetList().then(function(data) {
									$scope.budget = data.result;
								}, function(err) {
									if (err) {
										$scope.errorMessage = err;
									} else {
										$scope.errorMessage = err;
									}
								})
							};
							$scope.Billing = function(billingId){
								$scope.billingId = billingId;
								HrmsService.billingGetAll().then(function(data) {
									$scope.billingList = data.result;
								}, function(err) {
									if (err) {
										$scope.errorMessage = err;
									} else {
										$scope.errorMessage = err;
									}
								})
							};
							$scope.getEmployee = function(employeeListId) {
								debugger;
								$scope.employeeListId = employeeListId;
								HrmsService.empget().then(function(data) {
									$scope.employee = data.result;
									//$scope.getemployee= JSON.stringify($scope.employee);
									console.log($scope.getemployee);
								}, function(err) {
									if (err) {
										$scope.errorMessage = err;
									} else {
										$scope.errorMessage = err;
									}
								})
							};
							
							$scope.EmployeeType = function(employeeType) {
								debugger;
								$scope.employeeType = employeeType;
								HrmsService.empTypeGet().then(function(data) {
									$scope.empType = data.result;
									//$scope.getemployee= JSON.stringify($scope.employee);
									console.log($scope.getemployee);
								}, function(err) {
									if (err) {
										$scope.errorMessage = err;
									} else {
										$scope.errorMessage = err;
									}
								})
							};
							$scope.status=function(statusId){
								debugger;
								$scope.statusId = statusId;
								HrmsService.projectStatusGet().then(function(data) {
									$scope.statusList = data.result;
									console.log($scope.statusList);
								}, function(err) {
									if (err) {
										$scope.errorMessage = err;
									} else {
										$scope.errorMessage = err;
									}
								})
							}
							// Get Method

							$scope.projectgetList = function() {
								debugger;
								HrmsService
										.createProjectList()
										.then(
												function(data) {
													$scope.projectGetlist = data.result;
												},
												function(err) {
													if (err) {
														$scope.errorMessage = err;
													} else {
														$scope.errorMessage = err;
													}
												})
							};
							
							
							// Post Method
							$scope.projectCreation = function() {
								debugger;
								/*var project=JSON.stringify(($scope.project.employeeList.id));*/
								$scope.project=
								{
									"projectName":$scope.project.projectName,
									"projectType":{
									"id":$scope.project.projectType.id
									},
									"startingDate":$scope.project.startingDate,
									"endingDate":$scope.project.endingDate,
									"customer":{
									"id":$scope.project.customerId.id
									},
									"location":{
									"id":$scope.project.location.id
									},
									"employeeList":[
									{
									"id":$scope.project.employeeList.id
									   }
									   ],
									   "gst": $scope.project.gst,
									 "billingCycle":$scope.project.billingCycle,
									 "billingRate":$scope.project.billingRate,
									 "budget" : $scope.project.budget,
									 "accomodation": $scope.project.accomodation,
									 "travel":$scope.project.travel,
									 "sez":$scope.project.sez,
									 "bgv":$scope.project.bgv,
									 "deployementStartDate":$scope.project.deployementStartDate,
									 "deployementEndDate":$scope.project.deployementEndDate,
									 "projectStatus":{
									"id":$scope.project.projectStatus.id
									},
									 "customerContact":{
									  "id":$scope.project.customerContact.id
									   },
									 "billingModel":{
									  "id":$scope.project.billingModel.id
									 }
									};
								HrmsService.createProject($scope.project).then(function(data) {
											$scope.pjt = data.result;
											console.log($scope.pjt);
											$state.go("projectCreationList");
										}, function(err) {
											if (err) {
												$scope.errorMessage = err;
											} else {
												$scope.errorMessage = err;
											}
										})
							};

							// GetById Method
							$scope.creationGetByID = function() {
								debugger;
								HrmsService.creationgetbyId($stateParams.pcid).then(
												function(data) {
													$scope.creationget = data.result;
													$scope.creationget.startingDate = new Date(
															$scope.creationget.startingDate);
													$scope.creationget.endingDate = new Date(
															$scope.creationget.endingDate);
													// $scope.creationget.projectType=
													// $scope.creationget[0].projectType.projectTypeName;
													// console.log($scope.creationget.projectType);
													console
															.log($scope.creationget);

												},
												function(err) {
													if (err) {
														$scope.errorMessage = err;
													} else {
														$scope.errorMessage = err;
													}
												})
							};
							// Put Method
							$scope.creationreset = function() {
								debugger;
								$scope.updatecreationList = {
									"id" : $stateParams.pcid,
									"projectName":$scope.creationget.projectName,
									"projectType":{
									"id":$scope.creationget.projectType.id
									},
									"startingDate":$scope.creationget.startingDate,
									"endingDate":$scope.creationget.endingDate,
									"duration":2,
									"customer":{
									"id":$scope.creationget.customerId.id
									},
									"location":{
									"id":$scope.creationget.location.id
									},
									"employeeList":[
									{
									"id":$scope.creationget.employeeList.id
									   }
									   ],
									   "gst": $scope.creationget.gst,
									 "billingCycle": $scope.creationget.billingCycle,
									 "billingRate":$scope.creationget.billingRate,
									 "budget" : $scope.creationget.budget,
									 "accomodation": $scope.creationget.accomodation,
									 "travel":$scope.creationget.travel,
									 "sez":$scope.creationget.sez,
									 "bgv":$scope.creationget.bgv,
									 "deployementStartDate":$scope.creationget.deployementStartDate,
									 "deployementEndDate":$scope.creationget.deployementEndDate,
									 "projectStatus":{
									"id":$scope.creationget.projectStatus.id
									},
									 "customerContact":{
									  "id":$scope.creationget.customerContact.id
									   },
									 "billingModel":{
									  "id":$scope.creationget.billingModel.id
									 }
									};
								HrmsService.creationUpdate($scope.updatecreationList).then(
										function(data) {
											$scope.creatonList = data.result;
											console.log($scope.creatonList);
											$state.go("projectCreationList");
										}, function(err) {
											if (err) {
												$scope.errorMessage = err;
											} else {
												$scope.errorMessage = err;
											}
										})
							}

						} ]);
