// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let arr = str.toLowerCase().split('')
    if(arr.includes('x') === false || arr.includes('o' === false))
      return false;
  
    let map = new Map();
    map.set("x", 0)
    map.set("o", 0)
      
    for(let i = 0; i < str.length; i++) {
      if(arr[i] === "x"){
       map.set("x", map.get("x") + 1)
      } else if (arr[i] === "o") {
        map.set("o", map.get("o") + 1)
  
        }
      
  
    }
      return map.get("x") === map.get("o")
      
  }