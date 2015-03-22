var countryApp = angular.module('countryApp', []);
//this code works after minification
countryApp.controller('CountryController', ['$scope', '$http', function (myScope, myHttp) {
    myHttp.get('countries.json').success(function (data) {
        myScope.countries = data;
        myScope.sortField = "population";
    });
}]);

//NOT USED IN REAL LIFE APPS: the code below does not work after minification (variable names change).
/*countryApp.controller('CountryController', function($scope, $http) {
    $http.get('countries.json').success(function (data) {
        $scope.countries = data;
    });
});*/