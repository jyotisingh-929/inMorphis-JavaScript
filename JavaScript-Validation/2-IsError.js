function isError(value) {
    return value instanceof Error;
}
console.log(isError(new Error()));             // Output: true
console.log(isError(new TypeError()));         // Output: true
console.log(isError(new RangeError()));        // Output: true
console.log(isError("This is an error"));      // Output: false
console.log(isError({ message: "Error" }));    // Output: false
console.log(isError(null));                    // Output: false
