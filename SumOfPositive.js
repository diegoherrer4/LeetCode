const positiveSum = (arr) => {
    let count = 0;
      for(i of arr){
        if(i > 0)
         count += i
    }
    return count;
  }