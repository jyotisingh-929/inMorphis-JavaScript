function days_passed(date) {
    let startOfYear = new Date(date.getFullYear(), 0, 1);
    
    let diffInTime = date - startOfYear;
    
    let diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    
    return diffInDays + 1; 
}
console.log(days_passed(new Date(2015, 0, 15))); // Output: 15
console.log(days_passed(new Date(2015, 11, 14))); // Output: 348
