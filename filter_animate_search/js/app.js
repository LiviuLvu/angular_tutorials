var app = angular.module("app", [])
.controller('prices', function ($scope) {
    $scope.fruits = [
        {name:'oranges', price:25.3},
        {name:'peach', price:30.14},
        {name:'blueberries', price:28.0},
        
    ];
})
.filter("total", function() {
    return function(input) {
        var firstPart = input.substring(0,1);
        var secondPart = input.substring(2,3);
        return firstPart + " | " + secondPart;
    };
});