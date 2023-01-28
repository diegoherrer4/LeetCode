// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


const isValid = function (s) {
    let timer = 0
    let brackets = ["()", "{}", "[]"]
    const arrS = s.match(/.{1,2}/g) ?? [];
    for (let i = 0; i < arrS.length; i++) {
        if (brackets.includes(arrS[i])) {
            timer++;
            if (timer === arrS.length) {
                return true;
            }
        } else {
            return false;
        }

    }



}