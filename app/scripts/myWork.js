(function(angular) {
    'use strict';
    function MyWorkController(projectsService, $modal) {
        var vm = this;
        vm.projects = projectsService.set();
        vm.openModal = function($event) {
            var modalInstance = $modal.open({
                templateUrl: 'app/views/modals/projectModal.html',
                anchorElement: $event ? angular.element($event.target) : undefined,

            });
            modalInstance.result.then(function (selectedItem) {
                vm.modalResult = 'You selected ' + selectedItem;
            }, function () {
                vm.modalResult = 'You dismissed the modal';
            });
        };
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