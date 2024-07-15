let today = new Date();
let currYear = today.getFullYear();
let nextChristmas = new Date(currYear, 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25){
    nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
}

let OneDay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds

console.log(Math.ceil((nextChristmas.getTime() - today.getTime()) / (OneDay)) + " days left until Christmas!");
// OR
console.log(Math.ceil((nextChristmas - today) / OneDay) + " days left until Christmas!");