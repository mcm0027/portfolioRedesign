(function(angular) {
    'use strict';
    function SkillsController() {

    }

    angular.module('myApp').component('skills', {
        templateUrl: './views/skills.html',
        controller: SkillsController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);