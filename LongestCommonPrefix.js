// 14. Longest Common Prefix
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.



var longestCommonPrefix = function (strs) {
    // Initialize an empty string to store the common prefix
    let output = "";

    // Iterate through the characters of the first string (strs[0])
    for (let i = 0; i < strs[0].length; i++) {
        // Use the `every` method to check if all strings have the same character at index `i`
        if (strs.every(str => str[i] === strs[0][i])) {
            // If all strings have the same character at index `i`, add it to the common prefix
            output += strs[0][i];
        } else {
            // If not all strings have the same character at index `i`, exit the loop
            break;
        }
    }

    // Return the common prefix
    return output;
};
