function isUKPostcode(value) {
    // Regular expression to match UK postcode formats
    const postcodePattern = /^(GIR 0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPSTUW]) ?[0-9][ABD-HJLNP-UW-Z]{2})$/i;

    return postcodePattern.test(value);
}
console.log(isUKPostcode("SW1A 1AA")); // Output: true
console.log(isUKPostcode("EC1A 1BB")); // Output: true
console.log(isUKPostcode("W1A 0AX")); // Output: true
console.log(isUKPostcode("M1 1AE")); // Output: true
console.log(isUKPostcode("B33 8TH")); // Output: true
console.log(isUKPostcode("GIR 0AA")); // Output: true (special case for Girobank)
console.log(isUKPostcode("BS98 1TL")); // Output: true (Royal Mail postcode)
console.log(isUKPostcode("12345")); // Output: false (not a valid UK postcode format)
console.log(isUKPostcode("ABC 123")); // Output: false (not a valid UK postcode format)
console.log(isUKPostcode("")); // Output: false (empty string)
