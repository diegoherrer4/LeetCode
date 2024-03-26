// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice



function duplicateCount(str){
    //string -> number
    //Create hashmap that stores the amount of occurences of each letter
    //Loop over map to see which chars appear more than once and keep count
      str = str.toLowerCase()
      let map = new Map()
      let count = 0
        
      for(const char of str){
        if(!map.has(char)){
          map.set(char, 1)
        } else if(map.get(char)){
          map.set(char, map.get(char) + 1)
        }
      }
      
      for(const value of map.values()) {
        if(value > 1)
          count++
    }
      return count;
      
  }