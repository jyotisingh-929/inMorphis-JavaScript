function isAlphaNumeric(value) {
    const alphaNumericPattern = /^[a-zA-Z0-9]+$/;

    return alphaNumericPattern.test(value);
}
console.log(isAlphaNumeric("Hello123")); // Output: true
console.log(isAlphaNumeric("Hello World")); // Output: false (contains space)
console.log(isAlphaNumeric("12345")); // Output: true
console.log(isAlphaNumeric("@#$%")); // Output: false (contains special characters)
console.log(isAlphaNumeric("")); // Output: false (empty string)
console.log(isAlphaNumeric("alphaNumeric123")); // Output: true
