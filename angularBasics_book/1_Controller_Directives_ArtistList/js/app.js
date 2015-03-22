var app = angular.module('myApp', []);
app.controller('abMainCtrl', function abMainCtrl ($scope) {
    $scope.Albums = 
        [ { Name   : 'Dark side of the moon', 
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
          Year   : 1982 } 
        ];
    $scope.column  = 'Name';
    $scope.reverse = false;
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