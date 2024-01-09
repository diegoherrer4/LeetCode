function disemvowel(str) {
    // Take in a string, return a string
    // Check for vowels lowercase -> remove them -> return string
    let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let result = "";
  
    for (let i of str) {
      // Check if the current character is in the vowels array
      if (!vowels.includes(i)) {
        // If not, add it to the result string
        result += i;
      }
    }
  
    return result;
  }