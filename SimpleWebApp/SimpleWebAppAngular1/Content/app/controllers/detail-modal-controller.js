(function () {
    angular.module('app')
    .controller('DetailModalController',
        [
            '$scope', '$mdDialog', 'selectedTitle', 'awardsWon',
            DetailModalController
        ]);

    function DetailModalController($scope, $mdDialog, selectedTitle, awardsWon) {
        var vm = this;

        vm.selectedTitle = selectedTitle;
        vm.awardsWon = awardsWon;

        vm.hide = hide;
        vm.cancel = cancel;

        function hide() {
            $mdDialog.hide();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }
})();