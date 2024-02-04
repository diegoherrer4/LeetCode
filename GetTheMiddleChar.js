function getMiddle(s)
{
  const low = 0;
  const high = s.length;
  const m = Math.floor(low + (high - low) / 2)
  return high % 2 === 0 ? `${s[m - 1]}${s[m]}` : `${s[m]}`
}