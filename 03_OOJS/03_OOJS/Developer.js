
function Developer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
}

Developer.prototype = Object.create(Person.prototype);
//Developer.prototype = new Person();

Developer.prototype.code = function () {
    console.log(this.name + " is coding with " + this.language);
}
Developer.prototype = Object.freeze(Developer.prototype);
Developer.prototype.code = function () {
    console.log("new code");
}
