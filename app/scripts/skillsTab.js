(function(angular) {
    'use strict';
    function SkillsTabController() {

    }

    angular.module('myApp').component('skillsTab', {
        templateUrl: './views/skillsTab.html',
        controller: SkillsTabController,
        bindings: {
            //hero: '='
        }
    });
})(window.angular);