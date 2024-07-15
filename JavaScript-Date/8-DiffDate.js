function date_diff_indays(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    
    const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
    const diffInTime = secondDate.getTime() - firstDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    
    return diffInDays;
}
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014')); 
