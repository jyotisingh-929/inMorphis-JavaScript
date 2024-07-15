function hours_with_zeroes(date) {
    let hours = date.getHours();
    
    if (hours === 0) {
        return `"${12}"`; // Midnight (12 AM)
    } else if (hours > 12) {
        hours = hours - 12;
        if (hours < 10) {
            hours = '0' + hours;
        }
        return `"${hours}"`; // PM hours
    } else {
        if (hours < 10) {
            hours = '0' + hours;
        }
        return `"${hours}"`; // AM hours
    }
}
let dt = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dt)); // Output: "12"
