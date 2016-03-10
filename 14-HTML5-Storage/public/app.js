angular
    .module('myApp', [])
    .controller('myController', function($scope) {
        try {
            $scope.user = {
                // name: localStorage.getItem('username')
                name: localStorage.user && JSON.parse(localStorage.user).name
            };
        } catch (err) {
            console.log('who cares');
        }

        $scope.submit = function(username, password) {
            // localStorage.setItem('username', username);
            // localStorage.username = username;
            localStorage.user = JSON.stringify($scope.user);
        };

        window.addEventListener('storage', function(e) {
            console.log(e.oldValue, e.newValue);
        });
    })
;
