function add_weeks(date, weeks) {
    let newDate = new Date(date);

    let daysToAdd = weeks * 7;

    newDate.setDate(newDate.getDate() + daysToAdd);

    return newDate;
}
let dt = new Date(2014, 10, 2);
console.log(`"${add_weeks(dt, 10)}"`); // Output: "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"
