angular
    .module('myServices', [])
    .service('myService', function() {
        this.getData = function() {
            return 'Hello from a service!';
        };
    })
    .service('myOtherService', function(myService) {
        this.getOtherData = function() {
            console.log(myService.getData());

            return 'Hello from another service!';
        };
    })
    .factory('myOtherOtherService', function() {
        return {
            getData: function() {
                return 'foo';
            },

            createFoo: function() {
                return {};
            }
        };
    })
    .provider('mySuperService', function() {
        var data = 'uninitialized';

        return {
            setData: function(value) {
                data = value;
            },
            $get: function() {
                return {
                    getSuperData: function() {
                        return data;
                    }
                };
            }
        };
    })
;











//
