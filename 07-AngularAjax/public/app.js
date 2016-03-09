angular
    .module('myApp', [ 'ngResource' ])
    .factory('myData', function($http, $q) {
        var cache;

        return {
            getData: function() {
                // ajax goes here!!!

                // $.ajax();
                // new XMLHttpRequest()
                // fetch

                if (cache) {
                    return $q.resolve(cache);
                }

                return $http({
                    method: 'GET',
                    url: '/api/getData'
                }).then(function(res) {
                    console.log('got data');
                    cache = res.data;
                    return res.data;
                });
            },

            submitData: function(person) {
                return $http({
                    method: 'POST',
                    url: '/api/submitData',
                    data: person
                });
            }
        };
    })
    .controller('myController', function($scope, myData) {
        $scope.message = 'hello';

        $scope.downloadPeople = function() {
            console.log('download here');

            myData.getData()
                .then(function(data) {
                    console.log(data);
                    $scope.people = data;
                })
                .catch(function(err) {
                    console.log(err);
                })
            ;
        };

        $scope.submitPerson = function() {
            myData.submitData({
                first_name: 'Jason',
                last_name: 'Diamond'
            })//.then().catch();
        };
    })



















;
