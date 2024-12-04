function highAndLow(numbers){
    //convert to array to get the highest and lowest values
    // Plug those values back into a string with required format.
    let arr = numbers.split(' ').map(Number)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
  }