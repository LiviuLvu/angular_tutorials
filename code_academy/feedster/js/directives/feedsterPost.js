app.directive('feedsterPost', function () {
    return {
        restrict: 'E',
        scope: {
            posta: '='
        },
        templateUrl: 'js/directives/feedsterPost.html'
    };
});
