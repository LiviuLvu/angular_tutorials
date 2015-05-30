app.controller('MainController', ['$scope', function ($scope) {
    $scope.programs = [{
        series: "Sherlock",
        series_img: "img/sherlock.jpg",
        genre: "Crime drama",
        season: 3,
        episode: "The Empty Hearse",
        description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
    }, {
        series: "Lie To Me",
        series_img: "http://fs145.www.ex.ua/show/4576445/4576445.jpg?800",
        genre: "Crime, Drama, Mystery",
        season: 3,
        episode: "In the Red",
        description: "Cal joins a bank robbery crew in order to sabotage the heist from the inside, but he soon discovers that one of the men on the job has a very personal motive.",
        datetime: new Date(2011, 11, 31, 21, 00, 00, 00)
    }];
}]);
