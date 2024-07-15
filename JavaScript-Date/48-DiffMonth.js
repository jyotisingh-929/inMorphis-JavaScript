function diff_months(date1, date2) {
    let yearsDifference = date2.getFullYear() - date1.getFullYear();
    let monthsDifference = date2.getMonth() - date1.getMonth();
    
    let totalMonthsDifference = (yearsDifference * 12) + monthsDifference;

    return totalMonthsDifference;
}
let dt1 = new Date("June 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_months(dt1, dt2)); // Output: 4
