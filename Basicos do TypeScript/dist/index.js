// Basic Types
var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
// ids.push(true)
var arr = [1, true, 'Hello'];
// Tuple
var person = [1, 'Brad', true];
var employee;
employee = [
    [1, 'Brad'],
    [2, 'john'],
    [3, 'jill']
];
// Unions
var pid = 22;
pid = '22';
// Enum
// Vai enumerar como 0,1,2,3....
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Dowm"] = 2] = "Dowm";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: 'john'
};
// Type Assertion
var cid = 1;
// let customerId=<number>cid
var customerId = cid;
// Funtions
function addNum(X, Y) {
    return X + Y;
}
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'john'
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x + y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id,
            this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Mike Jordam');
// // brad.id=5
// brad.name='Michael'
// console.log(brad,mike)
console.log(brad.register());
