(function(angular) {
    'use strict';
    function MyWorkController(projectsService) {
        var vm = this;
        vm.projects = projectsService.set();
    }

    angular.module('myApp').component('myWork', {
        templateUrl: './app/views/myWork.html',
        controller: MyWorkController,
        controllerAs: 'vm',
        bindings: {
            //hero: '='
        }
    });
})(window.angular);