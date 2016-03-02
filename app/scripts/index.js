(function(angular) {
    'use strict';
    angular
        .module('myApp', [
            'ngRoute',
            'myApp.version',
            'ngMaterialize',
            'duScroll'
        ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});

    }])
    .controller('mainController', [
        mainController]);



    function mainController(){

    }

})(window.angular);

