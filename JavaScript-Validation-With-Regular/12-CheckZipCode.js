function isUSZipCode(value) {
    // Regular expression to match US ZIP code formats (5-digit or 5-digit+4)
    const zipCodePattern = /^\d{5}(?:-\d{4})?$/;

    return zipCodePattern.test(value);
}
console.log(isUSZipCode("12345")); // Output: true
console.log(isUSZipCode("12345-6789")); // Output: true
console.log(isUSZipCode("1234")); // Output: false (less than 5 digits)
console.log(isUSZipCode("123456")); // Output: false (more than 5 digits)
console.log(isUSZipCode("12345-")); // Output: false (missing last 4 digits)
console.log(isUSZipCode("12345-678")); // Output: false (last 3 digits instead of 4)
console.log(isUSZipCode("abcde")); // Output: false (non-numeric characters)
console.log(isUSZipCode("")); // Output: false (empty string)
