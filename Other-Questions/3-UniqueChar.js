function extractUniqueCharacters(str) {
    const charMap = {}; // Object to track character occurrences
    let uniqueString = '';

    // Iterate through each character in the string
    for (let char of str) {
        if (!charMap[char]) {
            // If character is encountered for the first time, add it to the result string
            charMap[char] = true;
            uniqueString += char;
        }
    }

    return uniqueString;
}
const inputString = "thequickbrownfoxjumpsoverthelazydog";
const uniqueCharacters = extractUniqueCharacters(inputString);
console.log(uniqueCharacters);  // Output: "thequickbrownfxjmpsvlazydg"
