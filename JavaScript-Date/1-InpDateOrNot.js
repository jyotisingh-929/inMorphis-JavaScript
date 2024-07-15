function is_date(input) {
    return Object.prototype.toString.call(input) === '[object Date]' && !isNaN(input);
}
console.log(is_date("October 13, 2014 11:13:00")); // Output: false
console.log(is_date(new Date(86400000))); // Output: true
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0))); // Output: true
console.log(is_date([1, 2, 4, 0])); // Output: false
