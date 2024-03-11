var isAnagram = function(test, original) {
    //string -> boolean
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
  };
  