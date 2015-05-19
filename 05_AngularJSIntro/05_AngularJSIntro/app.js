/// <reference path="angular.js" />

var mod = angular.module("app", []);

//mod.service("PersonSvc", function () {
//});

mod.controller("PersonCtrl", function ($scope) {
    var person = {
        name: "Brock",
        age: 23,
        state:"RI",
        children: [
            { name: "Mira" },
            { name: "Fred" },
            { name: "Fred" },
            { name: "Tess" }
        ]
    };

    $scope.model = person;
    $scope.states = [
        { name: "Texas", id: "TX" },
        { name: "Rhode Island", id: "RI" }
    ]

    $scope.showName = function (person) {
        return (person.age > 5);
    }
    $scope.canSave = function (person) {
        return (person.age && person.name);
    }
    $scope.update = function (person) {
        console.log('updating person', person);
    }

    //$scope.name = person.name;
    //$scope.age = person.age;
});

mod.controller("ChildCtrl", function ($scope) {
    console.log('in child, name is: ' + $scope.name)
});
