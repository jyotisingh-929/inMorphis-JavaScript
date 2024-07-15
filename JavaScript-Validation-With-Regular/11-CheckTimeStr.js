function isTimeString(value) {
    // Regular expression to match the time format HH:MM (24-hour format)
    const timePattern = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;

    return timePattern.test(value);
}
console.log(isTimeString("12:34")); // Output: true
console.log(isTimeString("23:59")); // Output: true
console.log(isTimeString("00:00")); // Output: true
console.log(isTimeString("09:15")); // Output: true
console.log(isTimeString("24:00")); // Output: false (hour out of range)
console.log(isTimeString("12:60")); // Output: false (minute out of range)
console.log(isTimeString("8:45")); // Output: false (single digit hour)
console.log(isTimeString("12.34")); // Output: false (invalid format)
console.log(isTimeString("")); // Output: false (empty string)
