(function(angular) {
    'use strict';
    function SkillBarsController() {

    }

    angular.module('myApp').component('skillBars', {
        templateUrl: './app/views/skillBars.html',
        controller: SkillBarsController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);