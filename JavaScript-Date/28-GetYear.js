function full_year(date){
    let year = date.getFullYear();
    return year;
}
let dt = new Date(2015, 10, 1);
console.log(full_year(dt));
