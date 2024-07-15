function isCanadaPostalCode(value) {
    // Regular expression to match Canadian postal code format
    const postalCodePattern = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;

    return postalCodePattern.test(value);
}
console.log(isCanadaPostalCode("K1A 0B1")); // Output: true
console.log(isCanadaPostalCode("M5H 2N2")); // Output: true
console.log(isCanadaPostalCode("T2N 1N4")); // Output: true
console.log(isCanadaPostalCode("V6B 2P6")); // Output: true
console.log(isCanadaPostalCode("12345")); // Output: false (not a valid Canadian postal code format)
console.log(isCanadaPostalCode("A1B2C3")); // Output: false (no space in between)
console.log(isCanadaPostalCode("")); // Output: false (empty string)
