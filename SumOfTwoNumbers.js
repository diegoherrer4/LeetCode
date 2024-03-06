// Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

var getSum = function(a, b) {
    while (b != 0) {
        let carry = a & b;  // Calculate the carry by performing bitwise AND
        a = a ^ b;          // Update 'a' by performing bitwise XOR
        b = carry << 1;     // Update 'b' by shifting the carry to the left by 1 position
    }
    return a;
};
