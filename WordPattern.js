// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

function wordPattern(pattern, s) {
    const words = s.split(' ');
    
    if (pattern.length !== words.length) {
        return false;
    }
    
    const charToWordMap = new Map();
    const wordToCharMap = new Map();
    
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        
        if (charToWordMap.has(char) && charToWordMap.get(char) !== word) {
            return false; // Character-to-word mapping already exists and doesn't match.
        }
        
        if (wordToCharMap.has(word) && wordToCharMap.get(word) !== char) {
            return false; // Word-to-character mapping already exists and doesn't match.
        }
        
        charToWordMap.set(char, word);
        wordToCharMap.set(word, char);
    }
    
    return true;
}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
