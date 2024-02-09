function dnaStrand(dna){
    let compDNA = ''
    let dnaMap = new Map()
    dnaMap.set('A', 'T')
    dnaMap.set('T', 'A')
    dnaMap.set('C', 'G')
    dnaMap.set('G', 'C')
    
     for(i of dna){  
      compDNA += dnaMap.get(i)
      }
    return compDNA
  }