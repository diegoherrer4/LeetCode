function longest(s1, s2) {
    let strSet = new Set([...s1, ...s2])
    return [...strSet].sort().join('')
  }