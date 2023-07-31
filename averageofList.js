// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



const findAverage = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0)
    return arr.length > 0 ? sum / arr.length : 0
  }