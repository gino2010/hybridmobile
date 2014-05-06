var app = angular.module("app", []);

app.directive("dumbPassword", function () {
    return {
        restrict: "E",
        replace: true,
        template: '<div>\n    <input type="text" ng-model="model.input"/>\n    <div>{{model.input}}</div>\n    \n</div>',
        link: function (scope, element) {
            scope.$watch("model.input", function (value) {
                if (value === "password") {
                    console.log("change it");
                    element.children().last().toggleClass("alert-box alert")
                }
            })
        }
    }
});