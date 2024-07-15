function full_Days(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let dayIndex = date.getDay();
    
    return `"${days[dayIndex]}"`;
}
let dt = new Date(2015, 10, 1);
console.log(full_Days(dt)); 
