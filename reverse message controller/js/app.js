var myApp = angular.module("myApp", []);

myApp.factory('Data', function () {
    return {message: "Service love"};
});

myApp.controller('FirstCtrl', function ($scope) {
    $scope.data = {message: "I'm data"};
});

myApp.controller('SecondCtrl', function ($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function(obj) {
        console.log(obj);
        return obj.split("").reverse().join("");
    };
});

//function SecondCtrl($scope, Data) {
//    $scope.data = Data;
//}