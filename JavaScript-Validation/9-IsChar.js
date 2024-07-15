function isChar(value) {
    return typeof value === 'string' && value.length === 1;
}
console.log(isChar('a'));        // Output: true
console.log(isChar('1'));        // Output: true
console.log(isChar(''));         // Output: false 
console.log(isChar('ab'));       // Output: false
console.log(isChar(1));          // Output: false
console.log(isChar(null));       // Output: false
console.log(isChar({}));         // Output: false
console.log(isChar([]));         // Output: false
