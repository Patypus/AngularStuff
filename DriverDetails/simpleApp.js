var simpleModule = angular.module('Simple', []);

simpleModule.factory('factory', function () {
});

simpleModule.service('MainService', function () {
});

simpleModule.controller('MainController', function () {
    var self = this;

    self.animals = [
        { name: "Platypus" },
        { name: "Lion" },
        { name: "Hippo" },
        { name: "Cappybara" },
        { name: "Penguin" }
    ]
});