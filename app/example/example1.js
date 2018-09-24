var app = angular.module("myapp", []);

app.controller('MyCntrl', function ($scope) {
    $scope.yourName = "";
    $scope.greeting = "Hola";
});