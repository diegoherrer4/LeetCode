// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

const smallEnough = (a, limit) => {
    let arr = []
     for(i of a){
       if(i <= limit){
         arr.push(i)
       } else {
         return false;
       }
     }
      return arr.length === a.length ? true : false
   }