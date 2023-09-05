function getCount(str) {
    let count = 0 
  
     for(i of str){
      if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
        count++
        }
    }
      return count
  }





//   Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.