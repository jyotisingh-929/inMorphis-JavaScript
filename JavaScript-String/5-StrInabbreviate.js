function abbrev_name(input) {
    let abbreviated = '';
    let lastNameFound = false;

    // Iterate through each character in the input string
    for (let i = 0; i < input.length; i++) {
        let char = input[i];

        // Check for the first space to separate first name and last name
        if (char === ' ') {
            lastNameFound = true;
            abbreviated += ' ';
        } else if (lastNameFound) {
            // Append the first character of the last name followed by a period
            abbreviated += char + '.';
            break; // Exit loop after appending abbreviated last name
        } else {
            // Append characters to form the first name
            abbreviated += char;
        }
    }

    return abbreviated;
}

// Test case
console.log(abbrev_name("Robin Singh")); // Output: "Robin S."
console.log(abbrev_name("John Doe")); // Output: "John D."
console.log(abbrev_name("Alice")); // Output: "Alice"
