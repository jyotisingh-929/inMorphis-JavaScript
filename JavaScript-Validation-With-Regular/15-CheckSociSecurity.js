function isSocialSecurityNumber(value) {
    // Regular expression to match Social Security Number format (XXX-XX-XXXX)
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    return ssnPattern.test(value);
}
console.log(isSocialSecurityNumber("123-45-6789")); // Output: true
console.log(isSocialSecurityNumber("987-65-4321")); // Output: true
console.log(isSocialSecurityNumber("123456789")); // Output: false (missing dashes)
console.log(isSocialSecurityNumber("123-456-789")); // Output: false (extra digits)
console.log(isSocialSecurityNumber("12345-6789")); // Output: false (incorrect format)
console.log(isSocialSecurityNumber("ABC-DE-FGHI")); // Output: false (non-numeric characters)
console.log(isSocialSecurityNumber("")); // Output: false (empty string)
