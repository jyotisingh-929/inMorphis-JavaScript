function seconds_with_leading_zeros(date) {
    let seconds = date.getSeconds();
    
    
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    return `"${seconds}"`;
}
let dt = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dt)); // Output: "00"
