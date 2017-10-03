
/*
var square = (x) => {
    var result = x * x;
    return result;
};
*/

// var square = (x) => x * x;
var square = x => x * x;
/* 
You don't need to explicitly add the "return" keyword
when you use the arrow function without curly braces
It's implicitly provided for you.

If you have an arrow function that has just one argument,
you can actully leave off the parentheses.

*/
console.log(square(9));


var user = {
    name: 'CH',
    sayHi: () => {
        console.log(`Hi. I'm ${this.name}`); 
        // arrow functions do not bind a 'this' keyword, 
        // so 'this' is global object => name is undefined
    },
    sayHiAlt () {
        // don't need : and =>, it's only for the method of an object
        // it's a regular function, not an arrow function
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt();
