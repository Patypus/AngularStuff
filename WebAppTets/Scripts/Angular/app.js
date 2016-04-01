var testModule = angular.module('TestApp', []);

testModule.controller('TestController', function () {
    var self = this;

    self.animals = [
        { name: "Platypus" },
        { name: "Lion" },
        { name: "Hippo" },
        { name: "Cappybara" },
        { name: "Penguin" }
    ]
});