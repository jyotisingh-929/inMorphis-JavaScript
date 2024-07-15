function ISO_numeric_date(date){
    let dayIndex = date.getDay();

    if(dayIndex === 0){
        return 7;
    }else{
        return dayIndex;
    }
}
let dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt));