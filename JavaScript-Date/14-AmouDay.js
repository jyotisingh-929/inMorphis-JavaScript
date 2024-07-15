function days_of_a_year(year) {
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    } else {
        return 365;
    }
}
console.log(days_of_a_year(2015)); 
console.log(days_of_a_year(2016)); 
