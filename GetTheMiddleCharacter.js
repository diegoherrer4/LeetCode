function getMiddle(s)
{
  let low = 0;
  let high = s.length
  let m = Math.floor(low + (high - low) / 2)
  
  if (high%2 === 0) {
    return `${s[m - 1]}${s[m]}`
  } else {
    return `${s[m]}`
  }
  
  
}