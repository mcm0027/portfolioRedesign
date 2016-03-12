(function(angular) {
    'use strict';
    function FooterComponentController() {

    }

    angular.module('myApp').component('footerComponent', {
        templateUrl: './app/views/footerComponent.html',
        controller: FooterComponentController,
        controllerAs: 'vm',
        bindings: {
            //hero: '='
        }
    });
})(window.angular);