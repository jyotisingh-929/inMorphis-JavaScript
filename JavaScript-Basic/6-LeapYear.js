function leapYear(year) {
    if ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    }
    return false;
}
let year = 2023;
if (leapYear(year)){
    console.log(`${year} is a Leap Year.`);
}else{
    console.log(`${year} is not a Leap Year.`)
}