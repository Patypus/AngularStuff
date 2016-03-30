var simpleModule = angular.module('Simple', []);

simpleModule.factory('factory', function () {
});

simpleModule.service('MainService', function () {
});

simpleModule.controller('Main', function ($scope) {
    var self = this;

    $scope.description = function () { return "This is from the controller?"; }
});