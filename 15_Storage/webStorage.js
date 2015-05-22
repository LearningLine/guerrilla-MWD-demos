document.getElementById('load').addEventListener('click', load);
document.getElementById('save').addEventListener('click', save);

function load() {
    // var name = localStorage.getItem('name');
    // var name = localStorage.name;
    var person = JSON.parse(localStorage.person);
    document.getElementById('name').value = person.name;
}

function save() {
    var name = document.getElementById('name').value;
    // localStorage.setItem('name', name);
    localStorage.person = JSON.stringify({
        name: name,
        age: 21
    });
}
