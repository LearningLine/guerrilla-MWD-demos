/// <reference path="angular.js"/>

(function () {

    var mod = angular.module("app", ["DirectorsMod"]);

    mod.controller("MovieCtrl", function ($scope, DirectorService) {
        $scope.name = "Aliens";
        $scope.rating = "R";
        $scope.director = 5;

        //$scope.DirectorService = DirectorService;

        $scope.$watch("name", function (newValue, oldValue) {
            //console.log(newValue, oldValue);
        });

        //$scope.getDirectorName = function (id) {
        //    var matching = directors.filter(function (d) {
        //        return d.id === id;
        //    });
        //    return matching[0] && matching[0].name;
        //}

        $scope.getDirectorName = function (id) {
            var d = DirectorService.getById(id);
            return d && d.name;
        }
    });

})();