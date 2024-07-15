function ISO8601_week_no(date) {
    let d = new Date(date);
    
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    
    let year = d.getFullYear();
    
    let startOfYear = new Date(year, 0, 1);
    let weekNumber = Math.ceil((((d - startOfYear) / 86400000) + 1) / 7);
    
    return weekNumber;
}
let dt = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt)); 
