function minutes_with_leading_zeros(date) {
    let minutes = date.getMinutes();
    
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    
    return `"${minutes}"`;
}
let dt = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dt)); // Output: "00"
