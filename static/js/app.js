var App = angular.module('App', [
    'ngRoute',
    'cargoController',
    'cargoServices'
]).config(['$interpolateProvider',function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

}]);


App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/cargo1/', {
            templateUrl: '../../templates/partials/index.html',
            controller: 'cargodetail'
        }).
        when('/cargo/', {
            templateUrl: static_url + 'html/cargos.html',
            controller: 'allcargoCrt'
        }).
        when('/customers/', {
            templateUrl: static_url + 'html/customers.html',
            controller: 'CustomerDetailsCtr'
        }).
        when('/customers/:customerID', {
            templateUrl: static_url + 'html/customerdetail.html',
            controller: 'CustomerCtr'
        }).
        when('/editcustomer/:customerID', {
            templateUrl: static_url + 'html/customers.html',
            controller: 'editCustomerCtr'
        }).
        when('/cargo/:cargoID', {
            templateUrl: static_url + 'html/cargodetails.html',
            controller: 'cargoCrt'
        }).
        when('/transactions/:id',{
            templateUrl:static_url + 'html/transactions.html',
            controller:'transactionsCrt'
        }).
        otherwise({
                redirectTo: '/cargo/'
            }
        );

    }

]);



App.config(['$resourceProvider',
    function ($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

}]);