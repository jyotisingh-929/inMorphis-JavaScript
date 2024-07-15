function insert(mainString, stringToInsert, position = 1) {
    if (position < 0 || position > mainString.length) {
        return "Invalid position";
    }

    let modifiedString = '';
    for (let i = 0; i < mainString.length; i++) {
        if (i === position - 1) {
            modifiedString += stringToInsert; // Insert stringToInsert at specified position
        }
        modifiedString += mainString[i];
    }

    // If position is at the end, append stringToInsert at the end
    if (position === mainString.length + 1) {
        modifiedString += stringToInsert;
    }

    return modifiedString;
}

// Test cases
console.log(insert('We are doing some exercises.')); // Output: "We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ')); // Output: "JavaScript We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); // Output: "We are doing some JavaScript exercises."
