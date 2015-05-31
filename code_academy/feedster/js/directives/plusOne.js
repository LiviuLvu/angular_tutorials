app.directive('plusOne', function () {
    return {
        templateUrl: 'js/directives/plusOne.html',
        restrict: 'E',
//        scope: {},
        link: function like(scope, element, attrs) {
            scope.like = function () {
                element.toggleClass('btn-like');
            };
        }
    };
});
