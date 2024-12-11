const squareDigits = (num) => {
    return +num.toString().split('').map(e => Number(e)**2).join("");
  }