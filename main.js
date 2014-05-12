var app = angular.module("app", []);

app.directive("country", function () {
    return {
        restrict: "E",
        controller: function () {
            this.makeAnnouncement = function (message) {
                console.log("Country says:" + message);
            }
        }
    }
});

app.directive("state", function () {
    return {
        restrict: "E",
        controller: function () {
            this.makeLaw = function (law) {
                console.log("Law: " + law)
            }
        },
        link: function (scope, element, attrs, countryCtrl) {

        }
    }
});

app.directive("city", function () {
    return {
        restrict: "E",
        require: ["^country", "^state"],
        controller: function ($scope) {
            $scope.things = ['one', 'two', 'three'];
        },
        link: function (scope, element, attrs, ctrls) {
            ctrls[0].makeAnnouncement("This city rocks.");
            ctrls[1].makeLaw("Jumper higher");
        }
    }
});

