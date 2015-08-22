var app = angular.module('APP', ['ngAnimate']);
app.controller('theController', function ($scope) {
    $scope.items = [];
    $scope.addItems = function () {
        for (var i = 10; i--;) {
            $scope.items.push({'title' : 'item' + i});
        }
    };
    $scope.clearItems = function () {
        $scope.items = []
    }
    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1)
    }
})
