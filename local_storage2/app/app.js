var example = angular.module("app", ["ngStorage"]);
example.controller("ExampleController", function($scope, $localStorage) {

    $scope.save = function() {
        $localStorage.message = 'Sara';
    };

    $scope.load = function() {
        $scope.data = $localStorage.message;
    };

});