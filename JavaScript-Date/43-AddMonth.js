function add_months(date, months) {
    let newDate = new Date(date);

    newDate.setMonth(newDate.getMonth() + months);

    return newDate;
}
let dt = new Date(2014, 10, 2);
console.log(`"${add_months(dt, 10)}"`); 
