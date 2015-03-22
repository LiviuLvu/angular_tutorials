angular.module('app', [
    'ngStorage'
]).

controller('Ctrl', function(
           $scope,
            $localStorage
           ){
    $scope.$storage = $localStorage.$default({
        x: 1
    });

    $scope.deleteX = function() {
        delete $scope.$storage.x;
    };

    $scope.deleteY = function() {
        delete $localStorage.y;
    };
});