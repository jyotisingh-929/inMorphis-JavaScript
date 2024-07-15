function english_ordinal_suffix(date) {
    let day = date.getDate();
    
    if (day === 1 || day === 21 || day === 31) {
        return day + "st";
    } else if (day === 2 || day === 22) {
        return day + "nd";
    } else if (day === 3 || day === 23) {
        return day + "rd";
    } else {
        return day + "th";
    }
}
let dt = new Date(2015, 10, 5);
console.log(english_ordinal_suffix(dt)); 
