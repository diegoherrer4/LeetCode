var countBits = function(n) {
    let intToBin = (n >>> 0).toString(2);
    
    return intToBin.toString().split('').filter((e) => e == 1).length
    
    };