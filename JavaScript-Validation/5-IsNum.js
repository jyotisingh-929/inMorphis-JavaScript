function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
console.log(isNumber(42));             // Output: true
console.log(isNumber(-3.14));          // Output: true
console.log(isNumber(0));              // Output: true
console.log(isNumber(NaN));            // Output: false
console.log(isNumber("123"));          // Output: false
console.log(isNumber(undefined));      // Output: false
console.log(isNumber(null));           // Output: false
console.log(isNumber({}));             // Output: false
console.log(isNumber([]));             // Output: false
