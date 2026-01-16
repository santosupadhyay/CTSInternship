//Basics of TS
var userName = "Santos";
var age = 25;
var isLoggedIn = true;
console.log(userName, age, isLoggedIn);
var newUser = {
    name: 'Santosh',
    age: 23,
    location: 'Dhangadhi'
};
var newUser2 = {
    name: 'Sameer',
    age: 22,
};
console.log(newUser, newUser2);
function greetUser(person) {
    var location = person.location ? person.location : 'Dhangadhi';
    console.log("Hello from ".concat(person.firstName, " ").concat(person.lastName, " from ").concat(location, ". "));
}
greetUser({ firstName: 'Santosh', lastName: 'Upadhyay', age: 25 });
//Functions in TS
//Normal function
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(2, 5));
function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(15));
//Default parameters
function greet(name, title) {
    if (name === void 0) { name = 'Guest'; }
    return "Hello, ".concat(title ? title + '' : '').concat(name);
}
console.log(greet());
//Generics
function identity(arg) {
    return arg;
}
// Using with a string
var output1 = identity("Hello World");
console.log(output1);
// Using with a number
var output2 = identity(123);
console.log(output2); // 123
var pair1 = { first: 1, second: "One" };
var Container = /** @class */ (function () {
    function Container(value) {
        this.value = value;
    }
    Container.prototype.getValue = function () {
        return this.value;
    };
    return Container;
}());
var stringContainer = new Container("Hello");
console.log(stringContainer.getValue()); // Hello
