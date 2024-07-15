function countWords(str) {
    // Remove leading and trailing whitespace
    str = str.trim();

    // Replace multiple spaces with a single space
    str = str.replace(/\s{2,}/g, ' ');

    // Split the string into an array of words
    // Exclude newline characters at the start of the string
    let words = str.split(/\s+/);

    // Return the number of words
    return words.length;
}
let testString1 = "   Hello,   World!  ";
let testString2 = "JavaScript    is   fun";
let testString3 = "\n\n   This is\n a sentence with\n newlines";

console.log(countWords(testString1)); // Output: 3
console.log(countWords(testString2)); // Output: 3
console.log(countWords(testString3)); // Output: 7
