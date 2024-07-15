function isHexadecimal(value) {
    // Regular expression to match hexadecimal format (case insensitive)
    const hexPattern = /^[0-9A-Fa-f]+$/;

    return hexPattern.test(value);
}
console.log(isHexadecimal("1A2F")); // Output: true
console.log(isHexadecimal("abcdef")); // Output: true
console.log(isHexadecimal("0x123")); // Output: false (contains '0x' prefix)
console.log(isHexadecimal("GHIJK")); // Output: false (contains non-hexadecimal characters)
console.log(isHexadecimal("123456789")); // Output: true
console.log(isHexadecimal("")); // Output: false (empty string)
