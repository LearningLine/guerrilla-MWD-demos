/// <reference path="angular.js" />
/// <reference path="angular-route.js" />

(function () {
    var mod = angular.module("app", ['ngRoute']);

    mod.config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: '/home.html'
            })
            .when("/products", {
                controller: function ($scope, ProductsSvc) {
                    ProductsSvc.getAll().then(function (products) {
                        $scope.products = products;
                    });
                },
                templateUrl: '/products.html'
            })
            .when("/products/:id", {
                controller: function ($scope, $routeParams, ProductsSvc) {
                    ProductsSvc.get($routeParams.id).then(function (product) {
                        $scope.product = product;
                    });

                    $scope.update = function (product) {
                        ProductsSvc.update(product).then(function (data) {
                            if (data && data.errors) {
                                $scope.errors  = data.errors;
                            }
                            else {
                                $scope.message = "Update Successful!";
                            }
                        }, function () {
                            // TODO
                        });
                    }
                },
                templateUrl: '/product.html'
            })
            .otherwise({
                redirectTo:'/home'
            });
    });

    mod.factory("ProductsSvc", function ($http) {
        return {
            getAll: function () {
                return $http.get("/api/products").then(function (response) {
                    return response.data;
                });
            },
            get: function (id) {
                return $http.get("/api/products/" + id).then(function (response) {
                    return response.data;
                });
            },
            update: function (product) {
                return $http.put("/api/products/" + product.id, product).then(function (response) {
                    return;
                }, function (response) {
                    if (response.status === 400 && response.data.errors) {
                        return response.data;
                    }
                    throw new Error("Error, status: " + response.status);
                });
            }
        };
    });

})();

//console.log('js!');


//var xhr = new XMLHttpRequest();
//xhr.open("GET", "api/products", true);

//xhr.onload = function () {
//    var json = xhr.responseText;
//    console.log(json)

//    var products = JSON.parse(json);

//}
//xhr.send();