function day_of_the_month(date) {
    let day = date.getDate();
    
    if(day < 10){
        day = '0' + day;
    }
    return day.toString();
}
let d = new Date(2015, 10, 1);
console.log(day_of_the_month(d)); // Output: "01"
