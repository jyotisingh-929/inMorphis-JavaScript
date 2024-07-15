function countVowels(str) {
    // Define vowels in a regular expression
    const vowelPattern = /[aeiou]/gi;

    // Match all occurrences of vowels in the string
    const vowels = str.match(vowelPattern);

    // Return the count of vowels (if found) or 0 if no vowels found
    return vowels ? vowels.length : 0;
}

// Example usage:
console.log(countVowels('United States')); // Output: 5
console.log(countVowels('Hello World')); // Output: 3
console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // Output: 5
console.log(countVowels('')); // Output: 0
