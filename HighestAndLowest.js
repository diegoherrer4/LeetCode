function highAndLow(numbers){
  
    let strToArr = numbers.split(' ').map((e) => Number(e))
    
    return `${Math.max(...strToArr)} ${Math.min(...strToArr)}`
  }