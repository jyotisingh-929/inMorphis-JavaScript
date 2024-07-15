function numeric_month(date){

    let months = date.getMonth() + 1;
    if(months < 10){
        months = '0' + months;
    }

    return `"${months}"`;
}
let dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));