nameApp = angular.module('nameApp',[]);

nameApp.controller('NameController', function ($scope) {
    $scope.names = ['Vlad','Jack','Cosmin','Samanthe'];

    $scope.enterName = 'write new name'; //adds text instruction to input field
    
    $scope.addName = function () {
        $scope.names.push($scope.enterName);
        $scope.enterName = ' '; //a space between quotes ensures input field is cleared after each new add
    };
    $scope.removeName = function (name) {
        var i =$scope.names.indexOf(name);
        $scope.names.splice(i, 1);
    };
});
