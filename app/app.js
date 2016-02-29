'use strict';
var myApp = angular.module('myApp', [  'ngRoute',
    'myApp.version',
    'ngMaterial']);
// Declare app level module which depends on views, and components
myApp.
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
controller('mainController', function(){});

