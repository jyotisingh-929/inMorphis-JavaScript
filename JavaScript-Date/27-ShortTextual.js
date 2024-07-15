function short_month(date){
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let monthsIndex = date.getMonth();

    return `"${months[monthsIndex]}"`;
}
let dt = new Date(2015, 10, 1);
console.log(short_month(dt));