angular.module('app')
    .factory('institutionDetailResource', ['$resource', 'InsitutionUiInfoResource',
        function ($resource, InsitutionUiInfoResource) {
            var res = $resource('api/institutionDetails/:id',
                { id: '@id' },
                {
                    query: {
                        method: 'GET',
                        isArray: true,
                        transformResponse: function (data, headers) {
                            var jsonData = JSON.parse(data);
                            _.each(jsonData, function (currentRec) {
                                    var unInfoResources = [];
                                    _.each(currentRec.uiInfo, function(currentUiInfoDetail) {
                                        unInfoResources.push(new InsitutionUiInfoResource(currentUiInfoDetail));
                                        });

                                    currentRec.uiInfo = unInfoResources;
                                });
                            return jsonData;
                        }
                    }
                }
            );
            return res;
        }]);