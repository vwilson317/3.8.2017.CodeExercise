(function () {
    angular.module('app')
    .controller('AppController',
        [
            '$scope', 'titleResource', '$log', '$timeout', '$q', '$mdDialog',
            AppController 
        ]);

    function AppController($scope, titleResource, $log, $timeout, $q, $mdDialog) {
        var vm = this;

        vm.search = '';
        vm.query = {
            order: 'title.titleName',
            limit: 5,
            page: 1
        };

        vm.simulateQuery = false;
        vm.isDisabled = false;
        vm.querySearch = querySearch;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;
        vm.onNameClick = onNameClick;
        vm.getWonAwardCount = getWonAwardCount;

        titleResource.query(function(data) {
            vm.titles = data;
        }, function(message) {
            console.log(message);
        });

        function querySearch(query) {
            var results = query ? vm.titles.filter(createFilterFor(query)) : vm.titles,
                deferred;
            if (vm.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(currentTitle) {
                return (currentTitle.awardName1.toLowerCase().indexOf(lowercaseQuery) === 0);
            };
        }

        function onNameClick(event, selectedTitle) {
            var awardsWon = getWonAwards(selectedTitle.awards);
            $mdDialog.show({
                controller: 'DetailModalController',
                controllerAs: 'vm',
                locals: { selectedTitle: selectedTitle, awardsWon: awardsWon },
                templateUrl: 'Content/app/views/detailModal.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true
            });
        }

        function getWonAwards(awards) {
            return _.where(awards, { awardWon: true });
        }

        function getWonAwardCount(awards) {
            var awardsWon = getWonAwards(awards);
            return awardsWon.length;
        }
    }
})();