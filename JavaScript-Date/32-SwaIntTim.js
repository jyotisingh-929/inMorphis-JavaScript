function internet_time(date) {
    let utcMillis = date.getTime();
    
    let beats = Math.floor((utcMillis % (24 * 3600 * 1000)) / (1000 * 86.4));
    
    return beats.toString().padStart(3, '0');
}
let dt = new Date(1989, 10, 1);
console.log(internet_time(dt)); // Output: "812"
