function formatted_string(padString, originalString, direction) {
    if (direction === 'l') {
        return (padString + originalString).slice(-padString.length);
    } else {
        return (originalString + padString).substring(0, padString.length);
    }
}
console.log(formatted_string('0000', 123, 'l')); // Output: "0123"
console.log(formatted_string('00000000', 123, '')); // Output: "12300000"
