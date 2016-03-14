(function(angular) {
    'use strict';
    function AboutMeController() {

    }

    angular.module('myApp').component('aboutMe', {
        templateUrl: './app/views/aboutMe.html',
        controller: AboutMeController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);