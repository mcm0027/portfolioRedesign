(function(angular) {
    'use strict';
    function MainNavController() {

    }

    angular.module('myApp').component('mainNav', {
        templateUrl: './app/views/mainNav.html',
        controller: MainNavController,
        controllerAs: 'vm',
        bindings: {
            //hero: '='
        }
    });
})(window.angular);