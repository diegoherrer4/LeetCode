// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i !== 0) {
      result += "-";
    }

    const currentChar = str.charAt(i).toUpperCase();
    result += currentChar;

    for (let j = 0; j < i; j++) {
      const repeatedChar = str.charAt(i).toLowerCase();
      result += repeatedChar;
    }
  }

  return result;
}
