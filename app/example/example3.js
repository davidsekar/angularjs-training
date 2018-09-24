var app = angular.module("myapp", []);

app.controller('ctrl1', function ($scope, $rootScope) {
    var vm = this;
    vm.currentValue = 0;
    $rootScope.result = 0;
    
    vm.addOne = function(){
        $rootScope.result += 1;
        vm.currentValue = $rootScope.result;
    }
});

app.controller('ctrl2', function ($scope, $rootScope) {
    var vm = this;
    vm.currentValue = 0;

    vm.addTwo = function(){
        $rootScope.result += 2;
        vm.currentValue = $rootScope.result;
    }
});

