var app = angular.module('abRouteApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
    when('/View', {
        templateUrl: 'RouteView1.html',
        controller : 'abViewCtrl'
    })
        .when('/Edit', {
        templateUrl: 'RouteEdit1.html',
        controller : 'abEditCtrl'
    })
        .otherwise({
        redirectTo: '/View'
    });
});
// Service object for holding all the main data model for building the web page
app.service('albumsSvc', function() {
    /*
     * We can define sample data here directly rather than load from a database
     */
    this.Albums = 
        [{ Name   : 'Dark side of the moon', 
          Artist : 'Pink Floyd', 
          Year   : 1973 },

         { Name   : 'Argus',
          Artist : 'Wishbone Ash', 
          Year   : 1972 },

         { Name   : 'Ziggy Stardust', 
          Artist : 'David Bowie', 
          Year   : 1972 },

         { Name   : 'Badfinger', 
          Artist : 'Badfinger',
          Year   : 1971 },

         { Name   : 'Thriller', 
          Artist : 'Michael Jackson', 
          Year   : 1982 }        ];
});
// Controller for View view
app.controller('abViewCtrl', function ABViewCtrl($scope, albumsSvc)
               {
    // Get addressability for the Albums data via a data service
    $scope.Albums = albumsSvc.Albums;
});

// Controller for Edit view
app.controller('abEditCtrl', function ABEditCtrl($scope, albumsSvc)
               {
    // Get addressability for the Albums data via a data service
    $scope.Albums = albumsSvc.Albums;
});
app.directive('abAlbum', function () { 
    return { 
        // We limit this directive to use as an attribute only.
        // Note that 'A' is the default, so not strictly needed here.
        restrict : 'A',

        // We do not want to use the contents of the element
        transclude : false,

        // We pick up the element title for display
        scope: {
            name   : "@",
            artist : "@",
            year   : "@"
        },        
        // We format the album fields
        templateUrl : 'Album.html'
    }; 
});
app.directive('abAlbumEdit', function () { 
    return { 
        // We limit this directive to use as an attribute only.
        // Note that 'A' is the default, so not strictly needed here.
        restrict : 'A',

        // We do not want to use the contents of the element
        transclude : false,

        // We pick up the element title for display
        scope: {
            name   : "=",
            artist : "=",
            year   : "="
        },

        // We format the album edit fields
        templateUrl : 'AlbumEdit.html'
    }; 
});

