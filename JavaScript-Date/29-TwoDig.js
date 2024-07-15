function short_year(date){
    let year = date.getFullYear();
    let shortYear = year % 100;
    if(shortYear < 10){
        shortYear = '0' + shortYear;
    }

    return `"${shortYear}"`;
}
let dt = new Date(1989, 10, 1);
console.log(short_year(dt));
