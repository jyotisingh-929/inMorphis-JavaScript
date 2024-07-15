function add_years(date, years) {
    let newDate = new Date(date);

    newDate.setFullYear(newDate.getFullYear() + years);

    return newDate;
}
let dt = new Date(2014, 10, 2);
console.log(`"${add_years(dt, 10)}"`); 
