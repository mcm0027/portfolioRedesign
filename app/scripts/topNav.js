(function(angular) {
    'use strict';
    function TopNavController() {
    }

    angular.module('myApp').component('topNav', {
        templateUrl: './views/topNav.html',
        controller: TopNavController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);