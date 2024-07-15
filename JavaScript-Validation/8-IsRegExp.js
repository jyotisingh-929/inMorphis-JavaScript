function isRegExp(value) {
    return value instanceof RegExp;
}
console.log(isRegExp(/ab+c/i));      // Output: true
console.log(isRegExp(new RegExp('ab+c', 'i'))); // Output: true
console.log(isRegExp("/ab+c/i"));   // Output: false 
console.log(isRegExp(null));        // Output: false
console.log(isRegExp(42));          // Output: false
console.log(isRegExp({}));          // Output: false
