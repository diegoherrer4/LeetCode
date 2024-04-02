[1, 2, 3].push(4); // Adds 4 to the end of the array: [1, 2, 3, 4]
[1, 2, 3].pop(); // Removes the last element from the array: [1, 2]
[1, 2, 3].shift(); // Removes the first element from the array: [2, 3]
[1, 2, 3].unshift(0); // Adds 0 to the beginning of the array: [0, 1, 2, 3]
['a', 'b'].concat('c'); // Concatenates 'c' to the array: ['a', 'b', 'c']
['a', 'b', 'c'].join('-'); // Joins array elements into a string with '-' delimiter: "a-b-c"
['a', 'b', 'c'].slice(1); // Returns a copy of array elements from index 1 onwards: ['b', 'c']
['a', 'b', 'c'].indexOf('b'); // Returns the index of 'b' in the array: 1
['a', 'b', 'c'].includes('c'); // Checks if 'c' is included in the array: true
[3, 5, 6, 8].find((n) => n % 2 === 0); // Finds the first even number: 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // Finds the index of the first odd number: 2
[3, 4, 8, 6].map((n) => n * 2); // Doubles each element of the array: [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0); // Filters out odd numbers: [4, 8]
[2, 4, 3, 7].reduce((acc, cur) => acc + cur); // Sums up all elements of the array: 16
[2, 3, 4, 5].every((x) => x < 6); // Checks if all elements are less than 6: true
[3, 5, 6, 8].some((n) => n > 6); // Checks if any element is greater than 6: true
[1, 2, 3, 4].reverse(); // Reverses the array: [4, 3, 2, 1]
[3, 5, 7, 8].at(-2); // Accesses the element at index -2: 7
[3, 5, 7, 8].sort((a, b) => a - b); // For ascending sort
