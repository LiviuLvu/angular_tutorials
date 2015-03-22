(function () {
    angular.module('app', [
        'ngStorage'
    ]).
        controller('Ctrl', function ($scope, $localStorage) {
            

            $scope.deleteX = function() {
                delete $scope.$storage.x;
            };

            $scope.deleteY = function() {
                delete $localStorage.y;
            };
        $scope.x = function () {
            $scope.storage = $localStorage.$default({x:1});
            $scope.storage.x = $localStorage.x + 1
            };
    });
}());