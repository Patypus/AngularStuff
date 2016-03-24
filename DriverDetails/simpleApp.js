var simpleModule = angular.module('Simple', []);

simpleModule.controller('Main', function () {
    var main = this;

    main.description = "This is from the controller?";
});