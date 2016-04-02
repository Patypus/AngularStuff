var testModule = angular.module('TestApp', []);

testModule.controller('TestController', function ($scope, $http) {
    var self = this;

    self.animals = [
        { Name: "Cappybara" }
    ]

    $http({
        method: 'GET',
        url: '/Api/GetAnimalsList'
    }).then(function successCallback(response) {
        debugger;
        var animalsReturned = response.data;
        for (var index = 0; index < animalsReturned.length; index++) {
            self.animals.push(animalsReturned[index]);
        }
    }, function errorCallback(response) {
        
    });
});