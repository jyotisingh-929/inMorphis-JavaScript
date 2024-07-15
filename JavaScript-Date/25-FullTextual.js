function full_month(date){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let monthsIndex = date.getMonth();

    return `"${months[monthsIndex]}"`;
}
let dt = new Date(2015, 10, 1);
console.log(full_month(dt));