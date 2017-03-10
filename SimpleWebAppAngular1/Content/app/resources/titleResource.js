angular.module('app')
    .factory('titleResource', ['$resource', function ($resource) {
        return $resource('http://localhost:58949/api/title/:id',
            { id: '@id' },
            {}
            //{
            //    query: {
            //        method: 'GET',
            //        isArray: true,
            //        transformResponse: function (data, headers) {
            //            var jsonData = JSON.parse(data);
            //            _.each(jsonData, function (currentRec) {
            //                var titleResources = [];
            //                _.each(currentRec.uiInfo, function (currentUiInfoDetail) {
            //                    titleResources.push(new TitleResource());
            //                });

            //                currentRec.uiInfo = unInfoResources;
            //            });
            //            return jsonData;
            //        }
            //    }
            //}
        );
    }]);