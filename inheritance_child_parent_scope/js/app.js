var app = angular.module("app", []);
app.controller("ParentController", function ($scope) {
    $scope.setModel = function () {
        $scope.model = { title: "Title set by parent" };
    };
    $scope.greet = function () {
        alert("This is a message from the parent commitee!");
    };
});

app.controller("ChildController", function ($scope) {
    $scope.content = "Content set by child";
    $scope.greet = function () {
        alert("I am the child inside");
    };
});
