let str = "Hello, world!";
str.charAt(4); // Returns the character at index 4: "o"
str.charCodeAt(4); // Returns the Unicode value of the character at index 4: 111
str.concat(" Welcome"); // Concatenates " Welcome" to the end of the string
str.endsWith("!"); // Checks if the string ends with "!"
str.includes("world"); // Checks if the string includes "world"
str.indexOf("o"); // Returns the index of the first occurrence of "o"
str.lastIndexOf("o"); // Returns the index of the last occurrence of "o"
str.match(/o/g); // Matches all occurrences of "o" in the string and returns an array
[...str.matchAll(/o/g)]; // Matches all occurrences of "o" in the string and returns an iterable
str.repeat(2); // Repeats the string twice
str.replace("world", "everyone"); // Replaces "world" with "everyone"
str.replaceAll("o", "0"); // Replaces all occurrences of "o" with "0"
str.search("world"); // Searches for "world" and returns the index of the first occurrence
str.slice(7); // Returns a substring starting from index 7
str.split(", "); // Splits the string into an array using ", " as the separator
str.startsWith("Hello"); // Checks if the string starts with "Hello"
str.substring(7); // Returns a substring starting from index 7
str.toLowerCase(); // Converts the string to lowercase
str.toUpperCase(); // Converts the string to uppercase
str.toString(); // Returns the string representation of the object
"  Hello, world!  ".trim(); // Removes whitespace from both ends of the string
str.valueOf(); // Returns the primitive value of the string object
