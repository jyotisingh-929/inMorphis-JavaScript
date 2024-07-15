function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(getDaysInMonth(1, 2012));  // Output: 31 (January)
console.log(getDaysInMonth(2, 2012));  // Output: 29 (February, leap year)
console.log(getDaysInMonth(9, 2012));  // Output: 30 (September)
console.log(getDaysInMonth(12, 2012)); // Output: 31 (December)
