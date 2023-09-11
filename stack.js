//A program that uses a stack to check for palindromes


//This program has a word string which then each letter will be put into an array, then each letter of that array would be popped off from the end and put into
//a string called reverseWord, we then check if word and reverseWord are equal, if so, our word is a palindrome.


//Pseudocode:
/*
word = "Diego"
letters = []
reverseWord = ""

1st for loop which separates each letter and puts it inside the array

2nd for loop which pops up last element and puts in inside reverseWord

check if word === reverseWord
if true > word is palindrome, else is not.
*/

let word = "bob"
let letters = []
let reverseWord = ""

for(let i = 0; i < word.length; i++){
    letters.push(word[i])
}

for(let i = 0; i < word.length; i++){
    reverseWord += letters.pop()
}


console.log(word == reverseWord)

//Returns true



//***Create a stack using a class

//Stack should have two initial variables: count (to keep count of the length), storage(to store all data), it should also have a function which adds
//a value to the end of the stack and a function to remove it, it should also have a size function which returns the length of the stack, and a 
// peek function which shows the last item of the stack.


//Pseudocode:
/*
stack = () => {
    count = 0
    storage = []


    push function(value) => this.storage[count] = value

    pop function() => {
        if(this.count === 0){
            return undefined
        }
        this.count--
        let result = this.storage[count]
        delete this.storage[count]
        return result
    }
    size() 
    return this.count
    peek()
    return this.storage[this.count-1]
}
*/

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count - 1];
    }
}



var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


