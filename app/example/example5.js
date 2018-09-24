var app = angular.module("myapp", []);

app.controller('ctrl1', function ($scope, $rootScope, $timeout, $window) {
    var vm = this;
    vm.currentValue = 0;

    $timeout(function () {
        // $scope.$apply(function () {
        //     vm.currentValue++;
        // });
        vm.currentValue++;
    }, 2000);

    var window = angular.element($window);
    window.bind('resize', function () {
        $window.console.log('resize triggered');
        vm.currentValue++;
    });
});