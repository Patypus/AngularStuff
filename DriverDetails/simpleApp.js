var simpleModule = angular.module('Simple', []);

simpleModule.factory('factory', function () {
});

simpleModule.service('MainService', function () {
    var service = this;

    var conservationStatus = [
        { name: "Extinct", abbreviation: "EX" },
        { name: "Extinct in the Wild", abbreviation: "EW" },
        { name: "Critically Endangered", abbreviation: "CR" },
        { name: "Endangered", abbreviation: "EN" },
        { name: "Vulnerable", abbreviation: "VU" },
        { name: "Near Threatened", abbreviation: "NT" },
        { name: "Conservation Dependent", abbreviation: "CD" },
        { name: "Least Conern", abbreviation: "LC" }
    ];

    var animals = [
        { name: "Platypus" },
        { name: "Lion" },
        { name: "Hippo" },
        { name: "Cappybara" },
        { name: "Penguin" }
    ]

    service.GetConservationStatuses = function () {
        return conservationStatus;
    }

    service.GetAnimals = function () {
        return animals;
    }
});

simpleModule.controller('MainController', function (MainService) {
    var self = this;

    self.animals = function () {
        return MainService.GetAnimals();
    }
});