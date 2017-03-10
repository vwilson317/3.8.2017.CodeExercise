angular.module('app')
    .factory('titleResource', ['$resource', function ($resource) {
        return $resource('http://localhost:58949/api/title/:id',
            { id: '@id' }
        );
    }]);