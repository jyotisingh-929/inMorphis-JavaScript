function isHexColor(value) {
    // Regular expression to match hexadecimal color format (case insensitive)
    const hexColorPattern = /^#[0-9A-Fa-f]{3}$|^#[0-9A-Fa-f]{6}$/;

    return hexColorPattern.test(value);
}
console.log(isHexColor("#abc")); // Output: true
console.log(isHexColor("#123456")); // Output: true
console.log(isHexColor("#fff")); // Output: true
console.log(isHexColor("#12abc")); // Output: false (not exactly 3 or 6 hex characters)
console.log(isHexColor("#ghijk")); // Output: false (contains non-hexadecimal characters)
console.log(isHexColor("123456")); // Output: false (missing '#' prefix)
console.log(isHexColor("")); // Output: false (empty string)
