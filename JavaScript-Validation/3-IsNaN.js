function isNaNValue(value) {
    return Number.isNaN(value);
}
console.log(isNaNValue(NaN));          // Output: true
console.log(isNaNValue(42));           // Output: false
console.log(isNaNValue("NaN"));        // Output: false
console.log(isNaNValue(undefined));    // Output: false
console.log(isNaNValue("hello"));      // Output: false
console.log(isNaNValue({}));           // Output: false
