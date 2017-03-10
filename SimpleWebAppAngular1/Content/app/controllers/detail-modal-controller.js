(function () {
    angular.module('app')
    .controller('DetailModalController',
        [
            '$scope', '$mdDialog', 'selectedItem',
            DetailModalController
        ]);

    function DetailModalController($scope, $mdDialog, selectedItem) {
        var vm = this;

        vm.selectedItem = selectedItem;

        vm.hide = hide;
        vm.cancel = cancel;
        vm.onSave = onSave;

        activate();

        ////////////////

        function hide() {
            $mdDialog.hide();
        }

        function cancel() {
            $mdDialog.cancel();
        }
    }
})();