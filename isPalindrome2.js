// 125. Valid Palindrome
// Solved
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


var isPalindrome = function(s) {
    // Initialize left and right pointers
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move the left pointer to the next alphanumeric character
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        // Move the right pointer to the next alphanumeric character
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        // Compare the characters at the left and right pointers
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move the pointers inward
        left++;
        right--;
    }

    // If the loop completes without returning false, it's a palindrome
    return true;
};

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}
