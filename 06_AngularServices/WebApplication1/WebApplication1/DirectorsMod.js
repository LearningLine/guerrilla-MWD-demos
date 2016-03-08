/// <reference path="angular.js" />


(function () {
    var directors = [
           { id: 1, name: "Bob" },
           { id: 5, name: "Alice" }
    ];

    var mod = angular.module("DirectorsMod", []);

    mod.filter("directorName", function (DirectorService) {
        return function (id) {
            //var matching = directors.filter(function (d) {
            //    return d.id === id;
            //});
            //return matching[0] && matching[0].name;
            var d = DirectorService.getById(id);
            return d && d.name;
        };
    });

    mod.config(function (DirectorServiceProvider, HttpProvider) {
        DirectorServiceProvider.logging = true;
    });

    mod.run(function (DirectorService) {

    });

    mod.provider("DirectorService", function () {
        var provider = {
            logging: false,

            $get: function () {
                var svc = {
                    getAll: function () {
                        if (provider.logging) {
                            console.log("logging....");
                        }
                        return directors;
                    },
                    getById: function (id) {
                        if (provider.logging) {
                            console.log("getting id", id);
                        }

                        var matching = directors.filter(function (d) {
                            return d.id === id;
                        });
                        return matching[0];
                    },
                    update: function (director) {
                        console.log("updating director", director);
                    }
                };
                return svc;
            }
        };
        return provider;
    });

    //mod.service("DirectorService", function () {
    //    this.getAll = function () {
    //        return directors;
    //    };
    //    this.getById = function (id) {
    //        var matching = directors.filter(function (d) {
    //            return d.id === id;
    //        });
    //        return matching[0];
    //    };
    //    this.update = function (director) {
    //        console.log("updating director", director);
    //    };
    //});

    mod.factory("DirectorService", function () {

        var logging = true;

        var svc = {
            getAll: function () {
                return directors;
            },
            getById: function (id) {
                var matching = directors.filter(function (d) {
                    return d.id === id;
                });
                return matching[0];
            },
            update: function (director) {
                console.log("updating director", director);
            }
        };
        return svc;
    });
})();