function findOdd(arr) {
    const counts = {};
    
      // Iterate over each element in the array
      arr.forEach(num => {
        // Check if the number exists as a key in the object
        if (counts[num]) {
          // If it does, increment its count by 1
          counts[num]++;
        } else {
          // If it doesn't, initialize its count to 1
          counts[num] = 1;
        }
      });
    
      // Iterate over the counts object to find the number with an odd count
      for (const [number, count] of Object.entries(counts)) {
        if (count % 2 !== 0) {
          // If the count is odd, return the corresponding number
          return Number(number);
        }
      }
    
      // If no number with an odd count is found, return null or any default value
      return null;
    }
    
    
    
    
    