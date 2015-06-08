var app = angular.module('ReaderApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/books', {
            controller: "BookshelfController",
            templateUrl: "views/bookshelf.html"
        })
        .when('/books/:booksId', {
            controller: "BookController",
            templateUrl: "views/book.html"
        })
        .when('/books/:booksid2/chapters/:chapterId', {
            controller: "ChapterController",
            templateUrl: "views/chapter.html"
        })
        .otherwise({
            redirectTo: '/books'
        });
});
