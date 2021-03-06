﻿var simpleModule = angular.module('Simple', []);

simpleModule.factory('factory', function () {
});

simpleModule.service('DetailsService', function () {
    var service = this;

    var teams = [
        {
            name: 'Scuderia Ferrari',
            championships: [1961, 1964, 1975, 1976, 1977, 1979, 1982, 1983, 1999, 2000, 2001, 2002, 2003, 2004, 2007, 2008],
            drivers: [
                {
                    name: 'Sebastian Vettel',
                    number: 5,
                    championships: [2010, 2011, 2012, 2013]
                },
                {
                    name: 'Kimi Räikkönen',
                    number: 7,
                    championships: [2007]
                }
            ]
        },
        {
            name: 'McLaren',
            championships: [1974, 1984, 1985, 1988, 1989, 1990, 1991, 1998],
            drivers: [
                {
                    name: 'Fernando Alonso',
                    number: 14,
                    championships: [2005, 2006]
                },
                {
                    name: 'Jenson Button',
                    number: 22,
                    championships: [2009]
                }
            ]
        },
        {
            name: 'Williams',
            championships: [1980, 1981, 1986, 1987, 1992, 1993, 1994, 1996, 1997],
            drivers: [
                {
                    name: 'Felipe Massa',
                    number: 19,
                    championships: []
                },
                {
                    name: 'Valtteri Bottas',
                    number: 77,
                    championships: []
                }
            ]
        },
        {
            name: 'Renault',
            championships: [2005, 2006],
            drivers: [
                {
                    name: 'Kevin Magnussen',
                    number: 20,
                    championships: []
                },
                {
                    name: 'Jolyon Palmer',
                    number: 30,
                    championships: []
                }
            ]
        }
    ]

    service.GetTeams = function () {
        return teams;
    }
});

simpleModule.controller('MainController', function (DetailsService) {
    var self = this;

    self.cachedTeams = DetailsService.GetTeams();
    self.selectedTeam = {};
    self.editingDriverName = -1;
    self.editingDriverNumber = -1;

    self.addTeam = function () {
        var newTeam = {
            name: "Enter details",
            championships: [],
            drivers: []
        }

        self.cachedTeams.push(newTeam);
        self.selectedTeam = newTeam;
    };

    self.selectTeam = function (team) {
        self.selectedTeam = team;
    };

    self.addDriverForSelectedTeam = function () {
        var newDriver = {
            name: "Enter name",
            number: "Enter number",
            championships: []
        };

        self.selectedTeam.drivers.push(newDriver);
    }

    self.editDriverNumber = function (index) {
        if (self.editingDriverNumber === -1) {
            self.editingDriverNumber = index
        } else {
            self.editingDriverNumber = -1
        }
    }

    self.editDriverName = function (index) {
        if (self.editingDriverName === -1) {
            self.editingDriverName = index
        } else {
            self.editingDriverName = -1
        }
    }
});