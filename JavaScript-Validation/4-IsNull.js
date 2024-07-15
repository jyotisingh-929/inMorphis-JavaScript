function isNull(value) {
    return value === null;
}
console.log(isNull(null));          // Output: true
console.log(isNull(undefined));     // Output: false
console.log(isNull(0));             // Output: false
console.log(isNull("null"));        // Output: false
console.log(isNull({}));            // Output: false
console.log(isNull([]));            // Output: false
