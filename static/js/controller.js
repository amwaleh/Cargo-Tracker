var cargoController = angular.module('cargoController', []);

cargoController.controller('cargodetail', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        return console.log('hello world')

    }]);

//gets all the cargo detail
cargoController.controller("allcargoCrt", ['$scope', 'Cargo', 'Cargosearch', '$routeParams', '$rootScope',
    function ($scope, Cargo, Cargosearch, $routeParams, $rootScope) {
        $scope.cargo = Cargo.query();
        //Search function for finding cargo
        $scope.search = function () {
            $rootScope.cargosearch = Cargosearch.query({search: $scope.searchTerm});
            $scope.cargosearch = $rootScope.cargosearch;
            console.log($scope.cargosearch);
            if (!$scope.cargosearch.resolved) {
                $scope.error = "No results were found " + $scope.searchTerm
            }

        }

    }]);

//gets specified cargo
cargoController.controller("cargoCrt", ['$scope', 'Cargo', '$routeParams',
    function ($scope, Cargo, $routeParams) {
        $scope.cargo = Cargo.get({id: $routeParams.cargoID});
        console.log($scope.cargo)
    }]);

//get individual cargo
cargoController.controller("CustomerCargoDetailsCtr", ['$scope', 'Cargo', '$routeParams',
    function ($scope, Cargo, $routeParams) {
        $scope.cargo = Cargo.get({id: $routeParams.cargoID});
    }]);

// gets all the customers
cargoController.controller("RouteController2", ['$scope', 'Customer',
    function ($scope, Customer) {
        $scope.customers = Customer.query();
    }]);

//Gets only the clients detail
cargoController.controller("CustomerDetailsCtr", ['$scope', 'CustomerDetails', '$location',
    function ($scope, CustomerDetails, $location) {
        $scope.customers = CustomerDetails.query();
        $scope.customer = {};
        $scope.create = function () {
            customer = CustomerDetails.save($scope.customer);
            customer.$promise.then(
                function (result) {
                    $scope.msg = "Registration success"
                    $location.path('/customers')
                }
            ).catch(
                function (error) {
                    $scope.error = error.data
                }
            )
        }


    }]);


cargoController.controller("CustomerCtr", ['$scope', 'CustomerDetails', '$routeParams', '$rootScope',
    function ($scope, CustomerDetails, $routeParams, $rootScope) {
        $rootScope.customers = CustomerDetails.get({id: $routeParams.customerID});
        $scope.customers = $rootScope.customers;
    }]);

cargoController.controller('transactionsCrt', ['$scope', 'transactionService', '$routeParams',
    function ($scope, transactionService, $routeParams) {
        $scope.customers = transactionService.get({id: $routeParams.id});
        console.log($scope.customers)
    }
]);


cargoController.controller("editCustomerCtr", ['$rootScope', 'CustomerDetails', '$routeParams',
    //Controller is used to Update Customer details
    function ($rootScope, CustomerDetails, $routeParams) {
        var customer = CustomerDetails.get({id: $routeParams.customerID});
        customer = $rootScope.customers;
        CustomerDetails.update({id: $routeParams.customerID}, customer);

    }]);
// cargoController.controller('registerCustomer',['$scope', '$rootScope','CustomerDetails', '$routeParams',
//     function($scope,CustomerDetails,$routeParams,$rootScope){
//
//         $scope.customers =  CustomerDetails.query();
//
//
//
//     }
//
// ]);