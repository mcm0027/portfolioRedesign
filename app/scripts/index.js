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
        mainController])

    .factory('projectsService', [
        projectsService
    ]);

    function mainController(){

    }

})(window.angular);

var hi = function(){
    alert("hi");
};

var hiButton = document.getElementById("button")

    hiButton.onclick = hi;

var poopButton = document.getElementById("poop")

poopButton.onclick = hi();

var showButton = document.getElementById("show");

showButton.onclick = function(){
    console.log("show " + hiButton);
    console.log("poop " + poopButton);
}

