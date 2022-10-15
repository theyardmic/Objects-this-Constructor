// constructor function
function Token (token_name, token_id, token_category) {

   // assigning  parameter values to the calling object
    this.name = token_name,
    this.id = token_id,
    this.category = token_category,

    this.details = function () {
        return ('Hi.Your Token is ${this.name}, with the ID of ${this.id} and its ${this.category}');
    }
}


// creating objects
const Token1 = new Token('BAYC', 23, 'png');
const Token2 = new Token('Crypto-Punk', 25, 'pixelated');

// accessing properties
console.log(Token1.details); 

