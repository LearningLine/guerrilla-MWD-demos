


var openReq = indexedDB.open('myDB', 2);

openReq.onupgradeneeded = function(e) {
    console.log('upgrade from %d to %d', e.oldVersion, e.newVersion);

    var db = e.target.result;

    db.createObjectStore('people', {
        keyPath: 'id'
    });
};

openReq.onsuccess = function(e) {
    console.log('db opened!');

    var db = e.target.result;

    document.getElementById('load').addEventListener('click', load);
    document.getElementById('save').addEventListener('click', save);
    document.getElementById('query').addEventListener('click', query);

    function load() {
        var tx = db.transaction([ 'people' ], 'readonly');

        var store = tx.objectStore('people');

        var getReq = store.get(document.getElementById('id').value);

        getReq.onsuccess = function(e) {
            var person = e.target.result;

            document.getElementById('name').value = person.name;
        };
    }

    function save() {
        var tx = db.transaction([ 'people' ], 'readwrite');

        var store = tx.objectStore('people');

        store.put({
            id: document.getElementById('id').value,
            name: document.getElementById('name').value
        });

        tx.oncomplete = function() {
            console.log('tx completed');
        };
    }

    function query() {
        var tx = db.transaction([ 'people' ], 'readonly');

        var store = tx.objectStore('people');

        var tbody = document.getElementById('results');
        tbody.innerHTML = '';

        var openReq = store.openCursor();
        
        openReq.onsuccess = function(e) {
            var cursor = e.target.result;

            if (cursor) {
                var person = cursor.value;
                addPersonToTable(person);
                cursor.continue();
            } else {
                console.log('done!');
            }
        };

        function addPersonToTable(person) {
            var row = tbody.insertRow(-1);
            row.insertCell(-1).textContent = person.id;
            row.insertCell(-1).textContent = person.name;
        }
    }
};












//
