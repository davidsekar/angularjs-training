var app = angular.module("myapp", []);

app.controller('ctrl1', function ($scope) {
    var vm = this;
    vm.yourName = "";
    vm.greeting = "Controller 1 :";
});

app.controller('ctrl2', function ($scope) {
    var vm = this;
    vm.yourName = "";
    vm.greeting = "Controller 2 :";
});

