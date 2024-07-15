function daylights_savings(date) {
    // Get the timezone offset for the date in minutes
    let standardOffset = date.getTimezoneOffset();
    
    // Create a date in the middle of the year to check DST
    let middleOfYearDate = new Date(date.getFullYear(), 6, 1);
    
    // Get the timezone offset for the middle of the year date in minutes
    let dstOffset = middleOfYearDate.getTimezoneOffset();
    
    // Compare the offsets to determine if DST is in effect
    return standardOffset !== dstOffset ? 1 : 0;
}
let dt = new Date();
console.log(daylights_savings(dt)); // Output: 1 (1 if in DST, 0 if not in DST)
