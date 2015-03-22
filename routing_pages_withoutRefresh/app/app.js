var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'country-list.html',
        controller: 'CountryListCtrl'
    }).
    when('/:countryName', {
        template: '<h1>{{name}}</h1>',
        controller: 'CountryDetailCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
});

countryApp.controller('CountryListCtrl', function ($scope, $http){
    $http.get('countries.json').success(function(data) {
        $scope.countries = data;
    });
});

countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams){
    $scope.name = $routeParams.countryName;
    console.log($routeParams);
});