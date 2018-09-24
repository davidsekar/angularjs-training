var app = angular.module("myapp", ['ngAnimate']);

app.controller('ctrl1', function ($scope, $location, arithmetic) {
    var vm = this;
    vm.a = 0;
    vm.b = 0;
    vm.result = 0;
    vm.url = '';

    vm.add = function () {
        vm.result = arithmetic.add(vm.a, vm.b);
    }

    vm.sub = function () {
        vm.result = arithmetic.subtract(vm.a, vm.b);
    }

    var activate = function () {
        vm.url = $location.path();
        // arithmetic.calculateOnline(vm.a, vm.b).then(function (data) {
        //     vm.result = data.result;
        // }, function (err) {
        //     console.error(err);
        // });
    }

    activate();
});

app.service('arithmetic', ['$http', function ($http) {
    var vm = this;
    vm.add = function (a, b) {
        return a + b;
    }
    vm.subtract = function (a, b) {
        return a - b;
    }

    vm.calculateOnline = function (a, b) {
        return $http.get('/calculate', {
            a: a,
            b: b
        });
    }
}]);