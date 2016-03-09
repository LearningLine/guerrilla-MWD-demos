angular
    .module('myApp', [ 'ngRoute' ])
    .config(function($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                resolve: {
                    myData: function($http) {
                        // return $http(...);
                        return 'i was resolved!';
                    },
                    myOtherData: function() {
                        // return $http(...);
                    }
                },
                controller: function(
                    $scope, $http,
                    // iFoo, iBar,
                    myData, myOtherData
                ) {
                    $scope.myData = myData;
                }
            })
            .when('/page2', {
                templateUrl: 'page2.html',
                controller: 'page2Controller'
            })
            .when('/person/:id', {
                templateUrl: 'person.html',
                resolve: {
                    person: function($route) {
                        // fake ajax...
                        return {
                            id: $route.current.params.id
                        };
                    }
                },
                controller: function($scope,  person) {
                    $scope.person = person;
                }
            })
            .otherwise({
                redirectTo: '/'
            })
        ;
    })
    .controller('myOtherController', function($scope) {
        // $scope.myOtherData = $scope.myData + '!!!';
    })
    .controller('page2Controller', function() {

    })















;
