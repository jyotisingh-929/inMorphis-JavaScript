function isValidCreditCardNumber(cardNumber) {
    // Remove all non-digit characters
    const cleaned = cardNumber.replace(/\D/g, '');

    let sum = 0;
    let shouldDouble = false;

    for (let i = cleaned.length - 1; i >= 0; i--) {
        let digit = parseInt(cleaned[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // A valid credit card number will have a sum that is a multiple of 10
    return sum % 10 === 0;
}

// Example usage:
const testCardNumber1 = "4539 1488 0343 6467"; // Valid Visa card number
const testCardNumber2 = "1234 5678 9012 3456"; // Invalid card number

console.log(isValidCreditCardNumber(testCardNumber1)); // Output: true
console.log(isValidCreditCardNumber(testCardNumber2)); // Output: false
