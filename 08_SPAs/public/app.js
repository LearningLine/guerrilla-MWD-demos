angular
    .module('myApp', [ 'ngRoute' ])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'people.html',
            controller: 'peopleController',
            resolve: {
                people: function(peopleDB) {
                    return peopleDB.getPeople();
                }
            }
        });

        $routeProvider.when('/people/:id', {
            templateUrl: 'person.html',
            controller: 'personController',
            resolve: {
                person: function($route, peopleDB) {
                    return peopleDB.getPerson($route.current.params.id);
                }
            }
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    })
    .controller('peopleController', function($scope, people) {
        $scope.people = people;
    })
    .controller('personController', function($scope, person) {
        $scope.person = person;
    })
    .factory('peopleDB', function($http) {
        return {
            getPeople: function() {
                return $http.get('/api/people').then(function(res) {
                    return res.data;
                });
            },
            getPerson: function(id) {
                return $http.get('/api/people/' + id).then(function(res) {
                    return res.data;
                });
            }
        };
    })
;
