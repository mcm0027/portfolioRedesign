(function(angular) {
    'use strict';
    function StrengthsController() {

    }

    angular.module('myApp').component('strengths', {
        templateUrl: './app/views/strengths.html',
        controller: StrengthsController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);