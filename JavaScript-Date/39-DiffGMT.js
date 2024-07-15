function diff_to_GMT(date) {
    // Get the timezone offset in minutes
    let offsetMinutes = date.getTimezoneOffset();
    
    // Calculate the absolute value of the offset in hours and minutes
    let offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    let offsetMinutesPart = Math.abs(offsetMinutes) % 60;
    
    // Determine the sign (+ or -)
    let sign = offsetMinutes <= 0 ? '+' : '-';
    
    // Format the hours and minutes with two decimal places
    let formattedOffset = `${sign}${offsetHours}.${(offsetMinutesPart * 100 / 60).toFixed(3)}`;
    
    return formattedOffset;
}
let dt = new Date();
console.log(diff_to_GMT(dt)); // Output example: "+05.500"
