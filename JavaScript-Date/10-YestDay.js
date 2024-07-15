function yesterday(dateString) {
    let date = new Date(dateString);

    date.setDate(date.getDate() - 1);

    return date.toString();
}
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));
