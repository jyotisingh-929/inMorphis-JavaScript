function isFirstCharUpperCase(str) {
    if (str.length === 0) {
        return false; // Empty string case
    }
    
    for (let i = 0; i < str.length; i++) {
        // Check the first character
        if (i === 0) {
            const firstChar = str[i];
            return firstChar >= 'A' && firstChar <= 'Z';
        }
    }
}
let testString1 = "Hello";
let testString2 = "world";
let testString3 = ""; // Edge case: empty string

console.log(isFirstCharUpperCase(testString1)); 
console.log(isFirstCharUpperCase(testString2)); 
console.log(isFirstCharUpperCase(testString3)); 
