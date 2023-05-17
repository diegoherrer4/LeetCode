// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	let result = []
  let wordArr = word.split('')
  for(let i = 0; i < wordArr.length; i++){
    if(wordArr[i] === wordArr[i].toUpperCase()){
      result.push(i)
    }
  }

  return result;
};