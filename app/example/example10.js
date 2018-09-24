var app = angular.module("myapp", ['ngAnimate']);

app.controller('ctrl1', ['$scope', '$window', function ($scope, $window) {
    var vm = this;

    vm.save = function () {
        $window.alert('saved');
    }

    var activate = function () {}

    activate();
}]);