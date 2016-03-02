(function(angular) {
    'use strict';
    angular
        .module('myApp', [
            'ngRoute',
            'myApp.version',
            'ngMaterialize'
        ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});

    }])
    .controller('myApp.mainController', [
        mainController]);



    function mainController(){


    }

})(window.angular);

