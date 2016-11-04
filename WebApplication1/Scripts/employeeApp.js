
//method Chaining - You chain the Module and controllers together instead of declaring them seperately
var app = angular
		.module("myModule", [])
		.controller('myController', function($scope) {
			var employees = [
				{ 
					name: "James",
					dob: new Date("November 23, 1980"),
					gender: 1,
					city: "London",
					salary: 77800
				},
				{ 
					name: "David",
					dob: new Date("January 10, 1985"),
					gender: 1,
					city: "New York",
					salary: 55322
				},
				{ 
					name: "Sue",
					dob: new Date("March 23, 1981"),
					gender: 3,
					city: "Cinnabar",
					salary: 86767
				},
				{ 
					name: "Denise",
					dob: new Date("May 03, 1995"),
					gender: 2,
					city: "Pallet Town",
					salary: 122477
				},
				{ 
					name: "Denephew",
					dob: new Date("May 03, 1995"),
					gender: 1,
					city: "Kantoville",
					salary: 24456
				}
			];

			$scope.employees = employees;

			$scope.employeeView = 'EmployeeInfo.html';

			$scope.rowLimit = 5;

			$scope.sortColumn = 'name';
			$scope.reverseSort = false;
			$scope.showSalary = false;
			
			$scope.sortData = function(column) {
				$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false 
				$scope.sortColumn = column
			}

			$scope.getSortClass = function (column) {
				if ($scope.sortColumn == column) {
					return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
				}
				return ''
			}

			$scope.search = function(searchItem) {
				if($scope.searchText == undefined) {
					return true; //display every row
				}
				else {
					if(searchItem.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || 
						searchItem.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) //If we find a match in name or city
					{
						return true
					}
				}

				return false
			}
		});