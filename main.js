var app = angular.module('phoneApp', []);

app.controller("AppCtrl", function($scope){
    $scope.leaveVoicemail = function(number, message){
        alert("Number:" + number + " said: " + message);
    }
})

app.directive("phone", function(){
    return {
        restrict: 'E',
        scope:{
            number: "@",
            networkp: "=",
            makeCall: "&"
        },
        template: '<div class="panel">Number: {{number}} Network: <select ng-model="networkp" ng-options="net for net in networks"></div>' +
            '<input type="text" ng-model="value"/>' +
            '<div class="button" ng-click="makeCall({number: number, message:value})">Call home!</div>',
        link: function (scope) {
            scope.networks = ["Verizon","AT&T", "Sprint"];
            scope.networkp = scope.networks[0];
        }
    };
});
