var app = angular.module("app", []);

app.controller("MyCtrl", ['$scope', '$http', function(a, b){
    console.log(b);
}])

app.directive("myDirective", function () {
    return {
        scope:{},
        link: function(scope, element, attrs) {
            console.log(scope)
        }
    }
});