/// <reference path="angular.js"/>

(function () {
    'use strict';

    var mod = angular.module("app", []);

    function FooCtrl($scope, $http){
        // ...jfdhjkfdhkfd
    }
    FooCtrl.$inject = ['$scope', '$http'];
    mod.controller("FooCtrl", FooCtrl);

    mod.controller("PersonCtrl", ["$scope", "$interval", function ($scope, $interval) {
        //console.log('person ctrl');
        //        $scope.name = "Brock";
        //        $scope.age = 5;

        $scope.person = {
            name: "Brock", age: 34,
            children: [
                { name: "Mira" },
                { name: "Tess" }
            ]
        }

        $interval(function () {
            $scope.person.age++;
            console.log($scope.person.age);

            //$scope.$apply(function () {
            //    $scope.person.age++;
            //});
        }, 1000);

        $scope.getOlder = function (person) {
            person.age++;
        }

        $scope.isValid = function (person, eula) {
            console.log(eula);
            return person.name && person.age && (eula === "yes");
        }

        $scope.update = function (person) {
            console.log("update called!", person);
        }
    }]);

    mod.controller("Person2Ctrl", function ($scope) {
        //console.log('person ctrl');
        $scope.name = "Jason";
        $scope.age = Math.random();
    });

})();