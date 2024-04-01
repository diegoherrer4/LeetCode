// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    // Split the string into an array using underscores (_) or dashes (-) as delimiters
    let arr = str.split(/[_-]/);
    
    // Save the first word and remove it from the array
    let first = arr.shift();
    
    // Capitalize the first letter of each word (excluding the first word)
    let camelCased = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    return first + camelCased
    
  
   
}