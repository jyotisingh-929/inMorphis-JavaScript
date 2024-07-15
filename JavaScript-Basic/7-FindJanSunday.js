let Sundays = [];
for (let year = 2014; year <= 2050; year++){
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0){
        Sundays.push(year);
    }
}
console.log("Years where 1st January is a Sunday between 2014 and 2050: ", Sundays);