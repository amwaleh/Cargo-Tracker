var App = angular.module('App', [
    'ngRoute',
    'cargoController',
    'cargoServices'
]).config(['$interpolateProvider',function ($interpolateProvider) {
    // this fuction helps us change the handlebar / template tags from {{}} to [[]]
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

}]);


App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/cargo/', {
            // lists all the available cargoes  needs search
            templateUrl: static_url + 'html/cargos.html',
            controller: 'allcargoCrt'
        }).
        when('/customers/', {
            //list all customers
            templateUrl: static_url + 'html/customers.html',
            controller: 'CustomerDetailsCtr'
        }).
        when('/customers/:customerID', {
            // list individual customer
            templateUrl: static_url + 'html/customerdetail.html',
            controller: 'CustomerCtr'
        }).
        when('/editcustomer/:customerID', {
            // route to edit customer details
            templateUrl: static_url + 'html/customers.html',
            controller: 'editCustomerCtr'
        }).
        when('/cargo/:cargoID', {
            // route to edit cargoid
            templateUrl: static_url + 'html/cargodetails.html',
            controller: 'cargoCrt'
        }).
        when('/transactions/:id',{
            //route to list info an all the cargo manifest
            templateUrl:static_url + 'html/transactions.html',
            controller:'transactionsCrt'
        }).when('/register/', {
            // route for registering a customer
            templateUrl: static_url + 'html/registerCustomer.html',
            controller: 'CustomerDetailsCtr'
        }).
        otherwise({
            // default landing page
                redirectTo: '/cargo/'
            }
        );

    }

]);



App.config(['$resourceProvider',
    function ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

}]);