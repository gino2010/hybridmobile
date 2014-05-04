var app = angular.module("supperhero", []);

app.directive("supperman", function () {
    return{
        restrict: "E",
        template: "<div>Here I am to save the day</div>"
    }
})

app.directive("flash", function () {
    return{
        restrict: "A",
        link: function () {
            alert("I'm working")
        }
    }
})

app.directive("huck", function () {
    return{
        restrict: "C",
        link: function () {
            alert("I'm stronger")
        }
    }
})

app.directive("comm", function () {
    return{
        restrict: "M",
        link: function () {
            alert("I'm comment")
        }
    }
})