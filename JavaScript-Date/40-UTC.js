function timezone_offset_in_seconds(date) {
    // Get the timezone offset in minutes
    let offsetMinutes = date.getTimezoneOffset();
    
    // Convert the offset to seconds
    let offsetSeconds = offsetMinutes * 60;
    
    // Since getTimezoneOffset returns the offset as a positive number for west of UTC and negative for east of UTC, we negate it to match the note
    offsetSeconds = -offsetSeconds;
    
    return offsetSeconds;
}
let dt = new Date();
console.log(timezone_offset_in_seconds(dt)); // Output example: 19800 for IST (GMT+5:30)
