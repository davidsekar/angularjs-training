var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "main",
            // controller : "Controller1",
            // controllerAs: 'ctrl'
        })
        .when("/red", {
            template: "red"
        })
        .when("/green", {
            template: "green"
        })
        .when("/blue", {
            template: "blue"
        });
});