
var app = angular.module("myApp", ['ngRoute', 'ui.bootstrap']);

app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home.html",
        controller: "HomeCtrl"
    });
}]);

