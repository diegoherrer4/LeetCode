function isHappy(n) {
    while (n > 6) { // while the current number is greater than 6
        let next = 0; // initialize the next number as 0
        while (n) { // while the current number is greater than 0
            next += (n % 10) * (n % 10); // add the square of the last digit of the current number to the next number
            n = Math.trunc(n / 10); // remove the last digit from the current number
        }
        n = next; // set the current number to the next number in the sequence
    }
    return n === 1; // if the current number is 1, it is a happy number, so return true, otherwise return false
}
