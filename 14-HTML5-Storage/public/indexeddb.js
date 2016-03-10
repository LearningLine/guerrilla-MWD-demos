angular
    .module('myApp', [])
    .controller('myController', function($scope, myDB) {
        $scope.user = {};

        $scope.submit = function(user) {
            myDB.save(user);
        };

        $scope.query = function() {
            myDB.query().then(function(users) {
                console.log(users);

                // $scope.$apply(function() {
                //     $scope.users = users;
                // });

                $scope.users = users;
            });
        };
    })
    .factory('myDB', function($q) {
        function openDB() {
            if (!window.indexedDB) {
                console.log('sorry dude');
                return;
            }

            var openReq = indexedDB.open('myDB', 4);

            openReq.onupgradeneeded = function(e) {
                console.log('upgrade needed from v%d to v%d', e.oldVersion, e.newVersion);

                var db = e.target.result;

                if (e.oldVersion < 3) {
                    db.createObjectStore('users', {
                        keyPath: 'id',
                        // autoIncrement: true
                    });
                }

                console.log('done!');
            };

            return openReq;
        }

        return {
            save: function(user) {
                var openReq = openDB();

                openReq.onsuccess = function(e) {
                    console.log('db is now open');

                    var db = e.target.result;

                    var tx = db.transaction([ 'users' ], 'readwrite');

                    var users = tx.objectStore('users');

                    users.put({
                        id: user.name,
                        firstName: user.first,
                        lastName: user.last
                    });

                    tx.oncomplete = function() {
                        console.log('tx closed!');
                    };
                };
            },
            query: function() {
                // return new Promise(function(resolve, reject) {
                return new $q(function(resolve, reject) {
                    var openReq = openDB();

                    var results = [];

                    openReq.onsuccess = function(e) {
                        var db = e.target.result;

                        var tx = db.transaction('users', 'readonly');

                        var users = tx.objectStore('users');

                        var cursor = users.openCursor();

                        cursor.onsuccess = function(e) {
                            var record = e.target.result;

                            if (record) {
                                console.log(record.value);

                                results.push(record.value);

                                record.continue();
                            } else {
                                // the end!!
                                resolve(results);
                            }
                        };
                    };
                });
            }
        };
    })






;
