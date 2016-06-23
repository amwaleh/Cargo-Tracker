var cargoController = angular.module('cargoController', []);

cargoController.controller('cargodetail', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        return console.log('hello world')

    }]);

//gets all the cargo detail
cargoController.controller("allcargoCrt", ['$scope', 'Cargo', '$routeParams',
    function ($scope, Cargo, $routeParams) {
        $scope.cargo = Cargo.query();
        console.log($scope.cargo)
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

// gets the customers
cargoController.controller("RouteController2", ['$scope', 'Customer',
    function ($scope, Customer) {
        $scope.customers = Customer.query();
    }]);

//Gets only the clients detail
cargoController.controller("CustomerDetailsCtr", ['$scope', 'CustomerDetails', '$routeParams',
    function ($scope, CustomerDetails) {
        $scope.customers = CustomerDetails.query();
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
        $id = customer.id;
        console.log($rootScope);
        customer = $rootScope.customers;
        CustomerDetails.update({id: $routeParams.customerID}, customer);

    }]);
