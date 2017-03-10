(function () {
    angular.module('app')
    .controller('AppController',
        [
            '$scope', 'institutionDetailResource', 'titleResource', '$mdSidenav', '$log', '$timeout', '$q', '$mdDialog', '$mdMedia',
            AppController 
        ]);

    function AppController($scope, institutionDetailsResource, titleResource, $mdSidenav, $log, $timeout, $q, $mdDialog, $mdMedia) {
        var vm = this;

        vm.search = '';
        vm.query = {
            order: 'info.bankName',
            limit: 5,
            page: 1
        };

        vm.simulateQuery = false;
        vm.isDisabled = false;
        vm.querySearch = querySearch;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;
        vm.onBankNameClick = onBankNameClick;

        institutionDetailsResource.query(function (data) {
            vm.institutionDetails = data;
            vm.selectedInstitution = vm.institutionDetails[0];
        }, function () {
            console.log('Failed to get institution details');
        });

        titleResource.query(function(data) {
            vm.titles = data;
        }, function(message) {
            console.log(message);
        });

        function toggleSideBar() {
            $mdSidenav('left').toggle();
        }

        $scope.selectInstitution = function(institution) {
            vm.selectedInstitution = angular.isNumber(institution) ? vm.institutionDetails[institution] : institution;
        }

        function querySearch(query) {
            var results = query ? vm.institutionDetails.filter(createFilterFor(query)) : vm.institutionDetails,
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
            return function filterFn(institutionDetail) {
                return (institutionDetail.info.bankName.toLowerCase().indexOf(lowercaseQuery) === 0 ||
                    institutionDetail.info.codeName.toLowerCase().indexOf(lowercaseQuery) === 0 ||
                    institutionDetail.info.version.indexOf(lowercaseQuery) === 0 ||
                    institutionDetail.info.institutionId.toString() === lowercaseQuery);
            };
        }

        function onBankNameClick(event, selectedItem) {
            var showFullscreen = $mdMedia('xs') || $mdMedia('sm');

            $mdDialog.show({
                controller: 'DetailModalController',
                controllerAs: 'vm',
                locals: { selectedItem: selectedItem },
                templateUrl: 'Content/app/views/bankModal.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: showFullscreen
            });
        }
    }
})();