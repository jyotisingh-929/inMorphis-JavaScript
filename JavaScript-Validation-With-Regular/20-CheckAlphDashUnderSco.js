function containsAlphaDashUnderscore(value) {
    // Regular expression to match alphabetic characters, dashes, and underscores
    const pattern = /^[a-zA-Z_-]+$/;

    return pattern.test(value);
}
console.log(containsAlphaDashUnderscore("alpha_dash_123")); // Output: false
console.log(containsAlphaDashUnderscore("alpha-dash")); // Output: true
console.log(containsAlphaDashUnderscore("AlphaDash_")); // Output: true
console.log(containsAlphaDashUnderscore("Alpha123")); // Output: false (contains digits)
console.log(containsAlphaDashUnderscore("Alpha$Dash")); // Output: false (contains special characters)
console.log(containsAlphaDashUnderscore("")); // Output: false (empty string)
