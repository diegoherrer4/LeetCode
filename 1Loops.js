// For Loop:
// Syntax: for (initialization; condition; increment/decrement) { // code block }
// Used when you know the number of iterations in advance or 
// when you need to iterate over a numerical range.
// Example:


for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...in Loop (for iterating over object properties):
// Specifically designed for iterating over the properties of an object.
// Useful when you need to iterate over the keys of an object (enumerable properties).
// Syntax: for (variable in object) { // code block }
// Example:


const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
    console.log(prop + ': ' + obj[prop]);
}

// For...of Loop (for iterating over iterable objects like arrays, strings, etc.):
// Used for iterating over iterable objects such as arrays, strings, maps, sets, etc.
// Provides a cleaner syntax compared to traditional for loops when 
// dealing with arrays or other iterable collections.
// Syntax: for (variable of iterable) { // code block }
// Example:


const arr = [1, 2, 3]
for (let elem of arr){
    console.log(elem);
}

// While Loop:
// Syntax: while (condition) { // code block }
// Used when the number of iterations is not known in advance and depends on a condition.
// Continues iterating as long as the specified condition evaluates to true.
// Example:


// let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do...While Loop:
// Syntax: do { // code block } while (condition);
// Similar to the while loop but ensures that the code block is
// executed at least once before checking the condition.
// Useful when you want to guarantee that a block of code runs 
// at least once, regardless of the condition.
// Example:


// let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);



