var app = angular.module("myapp", ['ngAnimate']);

app.controller('ctrl1', function ($scope) {
    var vm = this;
    vm.title1 = 'Attribute Directives';
    vm.title2 = 'Element Directives';
    vm.title3 = 'ClassName Directives';
    vm.title4 = 'Comment Directives';

    vm.friends = [
        {name:'John', age:25, gender:'boy'},
        {name:'Jessie', age:30, gender:'girl'},
        {name:'Johanna', age:28, gender:'girl'},
        {name:'Joy', age:15, gender:'girl'},
        {name:'Mary', age:28, gender:'girl'},
        {name:'Peter', age:95, gender:'boy'},
        {name:'Sebastian', age:50, gender:'boy'},
        {name:'Erika', age:27, gender:'girl'},
        {name:'Patrick', age:40, gender:'boy'},
        {name:'Samantha', age:60, gender:'girl'}
      ];  
});

app.directive('nameCard', function() {
    return {
        restrict: 'AECM',
        replace: true,
        template: '<section><div><em>Name :</em> {{friend.name}}</div>'+
        '<div><em>Age :</em> {{friend.age}}</div>' +
        '<div><em>Gender :</em> {{friend.gender}}</div>' +
        '<hr /></section>',
        // templateUrl:'example1.html'
    };
  });
