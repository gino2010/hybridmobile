var app = angular.module('choreApp', []);

app.controller("ChoreCtrl", function ($scope) {
    $scope.logChore = function (chorep) {
        alert(chorep + " is done");
    };
});

app.directive("kid", function () {
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chorei"> {{ chorei }} <br/>' +
            '<div class="button" ng-click="done({chorep:chorei})">I\'m done</div>'
    };
});