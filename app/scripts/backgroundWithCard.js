(function(angular) {
    'use strict';
    function BackgroundWithCardController() {

    }

    angular.module('myApp').component('backgroundWithCard', {
        templateUrl: './app/views/backgroundWithCard.html',
        controller: BackgroundWithCardController,
        controllerAs: 'vm',
        transclude:true,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);