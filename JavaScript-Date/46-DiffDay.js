function diff_days(date1, date2) {
    let diffMilliseconds = date2.getTime() - date1.getTime();

    let diffMinutes = diffMilliseconds / (1000 * 60 * 60 * 24);

    return diffMinutes;
}
let dt1 = new Date("October 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2)); // Output: 2
console.log(Math.floor(diff_days(dt1, dt2)));
