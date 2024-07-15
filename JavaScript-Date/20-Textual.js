function short_Days(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let dayIndex = date.getDay();
    
    return `"${days[dayIndex]}"`;
}
let dt = new Date(2015, 10, 1);
console.log(short_Days(dt)); // Output: "Sun"
