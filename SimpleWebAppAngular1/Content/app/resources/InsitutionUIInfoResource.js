angular.module('app')
    .factory('InsitutionUiInfoResource', ['$resource', function ($resource) {
    return $resource('api/institutionUiInfo/:id',
        { id: '@id' },
        {
            save: { method:'POST' }
        }
    );
    }]);

