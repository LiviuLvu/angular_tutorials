app.controller('ChapterController', ['$scope', 'books', '$routeParams', function ($scope, books, $routeParams) {
    books.success(function (data) {
        $scope.book = data[$routeParams.booksid2];
        $scope.chapter = data[$routeParams.chapterId];

        // If there no more chapters left, go back to the bookshelf view
        if ($routeParams.chapterId >= $scope.book.chapters.length - 1) {
            $scope.nextChapterIndex = "#";
        }
    });

    // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
    $scope.currentBookIndex = parseInt($routeParams.booksid2);
    $scope.currentChapterIndex = parseInt($routeParams.chapterId);
    $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
    $scope.previousChapterIndex = $scope.currentChapterIndex - 1;
}]);
