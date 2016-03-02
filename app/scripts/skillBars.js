(function(angular) {
    'use strict';
    function SkillBarsController() {

    }

    angular.module('myApp').component('skillBars', {
        templateUrl: './views/skillBars.html',
        controller: SkillBarsController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);