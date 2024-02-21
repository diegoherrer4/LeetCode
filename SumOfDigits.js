function digitalRoot(n) {
    // Convert n to a string to check its length
    if (n.toString().length === 1)
      return n;
  
    else {
      // Calculate the sum of digits
      let sum = n
        .toString()
        .split('')
        .map(e => Number(e))
        .reduce((acc, cur) => acc + cur);
  
      // Recursively call digitalRoot and return the result
      return digitalRoot(sum);
    }
  }
  