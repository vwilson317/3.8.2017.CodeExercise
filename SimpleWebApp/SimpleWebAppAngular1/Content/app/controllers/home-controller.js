(function() {
    angular
        .module('app')
        .controller('homeController',[
            '$scope',
            homeController
        ]);

    function homeController($scope) {
        $scope.getCssClass = function(booleanVal) {
            if (booleanVal) {
                return 'green';
            }
        };

        function getCssClass(booleanVal) {
            if (booleanVal) {
                return 'green';
            }
        };
    }
})();