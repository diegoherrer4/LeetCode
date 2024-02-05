function isIsogram(str) {
    const lowerCaseStr = str.toLowerCase();
    const strArr = lowerCaseStr.split('');
    const newStr = new Set(strArr);
    return newStr.size === strArr.length;
  }
  