function diff_weeks(date1, date2) {
    let diffMilliseconds = date2.getTime() - date1.getTime();

    let diffWeeks = diffMilliseconds / (1000 * 60 * 60 * 24 * 7);

    return diffWeeks;
}
let dt1 = new Date("June 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2));

console.log(Math.floor(diff_weeks(dt1, dt2))); 
