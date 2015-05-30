var app = angular.module("app", []);
app.controller("FriendsController", function ($scope, $http) {
    $scope.loadFriends = function () {
        $http.get("friends.json").success(function(data) {
            $scope.friends = data;
        }).error(function() {
            alert("unexpected error came along to the party");
        });
    };
});
app.controller("Friends2Controller", function ($scope, $http) {
    $scope.loadFriends = function () {
        $http.get("friends.json").success(function(data) {
            $scope.friends = data;
        }).error(function() {
            alert("unexpected error came along to the party");
        });
    };
});
