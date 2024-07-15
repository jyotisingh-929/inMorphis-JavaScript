function firstNonRepeatedCharacter(str) {
    const charCount = {};

    // Count occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character with a count of 1
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    return null; 
}

let sampleString = 'abacddbec';
let result = firstNonRepeatedCharacter(sampleString);
console.log("First non-repeated character:", result);
