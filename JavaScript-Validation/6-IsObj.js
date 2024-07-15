function isObject(value) {
    return value !== null && typeof value === 'object';
}
console.log(isObject({}));             // Output: true
console.log(isObject({ a: 1 }));       // Output: true
console.log(isObject([]));             // Output: true (arrays are objects)
console.log(isObject(null));           // Output: false
console.log(isObject(42));             // Output: false
console.log(isObject("object"));       // Output: false
console.log(isObject(function () { }));  // Output: false
console.log(isObject(new Date()));     // Output: true
