// constructor function
function Token (token_name, token_id, token_category) {

   // assigning  parameter values to the calling object
    this.name = token_name,
    this.id = token_id,
    this.category = token_category,

    this.details = function () {
        return ('Hi.Your Token is' + ' ' + this.name);
    }
}


// creating objects
const person1 = new Person('John', 23, 'male');
const person2 = new Person('Sam', 25, 'female');

// accessing properties
console.log(person1.name); // "John"
console.log(person2.name); // "Sam"
