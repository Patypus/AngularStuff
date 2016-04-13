var simpleModule = angular.module('Simple', []);

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

simpleModule.controller('DetailsService', function (MainService) {
    var self = this;

    self.teams = function () {
        return MainService.GetTeams();
    }
});