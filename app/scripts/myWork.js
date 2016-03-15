(function(angular) {
    'use strict';
    var MyWorkController = ['projectsService', function (projectsService) {
        var vm = this;
        vm.projects = projectsService.set();

    }];

    angular.module('myApp').component('myWork', {
        templateUrl: './app/views/myWork.html',
        controller: MyWorkController,
        controllerAs: 'vm',
        bindings: {
            //hero: '='
        }
    });
})(window.angular);