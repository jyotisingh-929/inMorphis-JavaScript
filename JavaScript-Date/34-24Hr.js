function hours_without_zeroes(date) {
    let hours = date.getHours();
    
    return `"${hours}"`; 
}
let dt = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dt)); // Output: "0"
