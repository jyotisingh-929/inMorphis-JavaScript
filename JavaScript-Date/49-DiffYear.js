function diff_years(date1, date2) {
    let diffYears = date2.getFullYear() - date1.getFullYear();

    if (date2.getMonth() < date1.getMonth() || (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())) {
        diffYears--;
    }

    return diffYears;
}
let dt1 = new Date("June 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2)); // Output: 3
