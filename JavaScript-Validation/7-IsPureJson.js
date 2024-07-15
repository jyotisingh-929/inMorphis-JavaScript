function isJSONObject(value) {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
        return false;
    }
    return Object.prototype.toString.call(value) === '[object Object]';
}
console.log(isJSONObject({}));             // Output: true
console.log(isJSONObject({ a: 1 }));       // Output: true
console.log(isJSONObject([]));             // Output: false 
console.log(isJSONObject(null));           // Output: false
console.log(isJSONObject(42));             // Output: false
console.log(isJSONObject("object"));       // Output: false
console.log(isJSONObject(function () { }));  // Output: false
console.log(isJSONObject(new Date()));     // Output: false
