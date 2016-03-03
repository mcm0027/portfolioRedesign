(function(angular) {
    'use strict';
    function MyWorkController() {

    }

    angular.module('myApp').component('myWork', {
        templateUrl: './views/myWork.html',
        controller: MyWorkController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);