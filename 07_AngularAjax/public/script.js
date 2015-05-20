angular
    .module('myApp', [ 'ngResource' ])
    .controller('myController', function($scope, myDB, myPeople) {
        $scope.getPeople = function() {
            // myDB.getPeople()
            //     .then(function(res) {
            //         if (res.status < 400) {
            //             $scope.people = res.data;
            //         } else {
            //             console.error(res.status);
            //         }
            //     })
            //     .catch(function(err) {
            //         console.error(err);
            //     })
            // ;

            $scope.people = myPeople.query();

            $scope.people.$promise.then(function() {
                console.log($scope.people.length);
            });

            console.log($scope.people.length);
        };

        $scope.createPerson = function() {
            myDB.createPerson().then(function() {
                console.log('person created');
            });
        };
    })
    .factory('myDB', function($http) {
        return {
            getPeople: function() {
                return $http.get('/api/data');

                // return $http({ method: 'GET', url: '/api/data' });
            },
            createPerson: function() {
                return $http({
                    method: 'POST',
                    url: '/api/data',
                    data: {
                        name: 'Carol'
                    }
                });
            }
        }
    })
    .factory('myPeople', function($resource) {
        return $resource('/api/data', {
            id: '@name'
        });
    })
;

// var xhr = new XMLHttpRequest();
// xhr.open('GET', '/api/data');
//
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         var data = JSON.parse(xhr.responseText);
//         console.log(data);
//     }
// };
//
// xhr.send();
