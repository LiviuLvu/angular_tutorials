var app = angular.module("app", []);
app.controller("QuestionaireController", function ($scope) {
    $scope.questionaire = [
        { number: "1", question: "How old are you?", type: "number" },
        { number: "2", question: "Your date of birth?", type: "date" },
        { number: "3", question: "Describe youreself in a few words.", type: "text" },
        { number: "4", question: "What is your favourite color?", type: "singleOption" },
        { number: "5", question: "Which of the following sweets do you like?", type: "multiOption" }
    ];
});
