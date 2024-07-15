function get_timezone(date) {
    // Get the timezone offset in minutes
    let offsetMinutes = date.getTimezoneOffset();
    
    // Convert the offset to hours and minutes
    let offsetHours = Math.abs(Math.floor(offsetMinutes / 60));
    let offsetMinutesPart = Math.abs(offsetMinutes % 60);
    
    // Determine the timezone suffix (+ or -)
    let suffix = offsetMinutes >= 0 ? '-' : '+';
    
    // Construct the timezone string
    let timezoneString = 'GMT' + suffix + padZeroes(offsetHours) + ':' + padZeroes(offsetMinutesPart);
    
    // Get the full timezone name
    let timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    return timezoneName;
}

// Function to pad zeroes
function padZeroes(num) {
    return num.toString().padStart(2, '0');
}
let dt = new Date();
console.log(get_timezone(dt)); // Output example: "India Standard Time"
