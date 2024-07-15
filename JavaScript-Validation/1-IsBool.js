function isBoolean(value) {
    return typeof value === 'boolean';
}
console.log(isBoolean(true));  // Output: true
console.log(isBoolean(false)); // Output: true
console.log(isBoolean(0));     // Output: false
console.log(isBoolean("true"));// Output: false
console.log(isBoolean(null));  // Output: false
