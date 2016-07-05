var cargoServices = angular.module('cargoServices',['ngResource']);

cargoServices.factory('Cargo', ['$resource',
  function($resource){
    return $resource('/cargo/:id', null, {
    });
  }
]);

cargoServices.factory('Cargosearch', ['$resource',
    function ($resource) {
        return $resource('/cargo?search=:search', {search: '@search'}, {
            update: {method: 'PUT'}
        });
    }
]);

cargoServices.factory('CustomerDetails', ['$resource',
  function($resource){
      return $resource('/customer/:id/', {id: '@id'}, {
        update: {method: 'PUT'},
          get: {method: 'GET'},



    });
  }
]);

cargoServices.factory('transactionService', ['$resource',
    function($resource){
        return $resource('/transactions/:id/ ',null,{
            update: {method: 'PUT'}
        })
}]);