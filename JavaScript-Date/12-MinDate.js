function min_date(dates) {
    let dateObjects = dates.map(date => new Date(date));
    
    let maxDate = new Date(Math.min.apply(null, dateObjects));
    
    let yyyy = maxDate.getFullYear();
    let mm = maxDate.getMonth() + 1;
    let dd = maxDate.getDate();

    if(mm < 10){
        mm = '0' + mm;
    }
    if(dd < 10){
        dd = '0' + dd;
    }
    
    return `"${yyyy}/${mm}/${dd}"`;
}
console.log(min_date((['2015/02/01', '2015/02/02', '2015/01/03']))); // Output: "2015/02/02"
