(function(angular) {
    'use strict';
    angular.module('myApp', ['ngRoute',
        'myApp.version',
        'ngMaterial'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]).config(['$mdThemingProvider', function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('deep-orange');
    }]).controller('mainController', function () {
    });

})(window.angular);

