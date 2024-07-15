function areTypesSame(value1, value2) {
    return typeof value1 === typeof value2;
}
console.log(areTypesSame(42, 42));         // Output: true (both are numbers)
console.log(areTypesSame('hello', 'world')); // Output: true (both are strings)
console.log(areTypesSame(true, false));   // Output: true (both are booleans)
console.log(areTypesSame(null, null));    // Output: true (both are null)
console.log(areTypesSame(undefined, null)); // Output: false (different types: undefined and null)
console.log(areTypesSame({}, {}));        // Output: false (different objects, even though both are of type 'object')
console.log(areTypesSame([], []));        // Output: false (different arrays, even though both are of type 'object')
console.log(areTypesSame(42, '42'));      // Output: false (different types: number and string)
