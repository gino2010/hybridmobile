var app = angular.module('phoneApp', []);

app.controller("AppCtrl", function($scope){
    $scope.callHome = function(message){
        alert(message);
    }
})

app.directive("phone", function(){
    return {
        restrict: 'E',
        scope:{
            dial: "&"
        },
        template: '<input type="text" ng-model="value"/>' +
            '<div class="button" ng-click="dial({message:value})">call home!</div>'
    }
})
