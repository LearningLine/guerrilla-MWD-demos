angular
    .module('myApp', [ 'myServices', 'myDirectives' ])
    .controller('myController', function($scope, mySuperService) {
        // $scope.message = 'Hello!';

        $scope.message = mySuperService.getSuperData();

        $scope.model = {
            selectedDate: new Date(2001, 0, 1),
            password: 'secret'
        };

        $scope.badPassword = function() {
            console.log('it\'s bad!!!');
        };
    })
    .config(function(mySuperServiceProvider) {
        mySuperServiceProvider.setData('initialized!');
    })
;
