function repeat_string(str, count) {
    if (typeof str !== 'string' || typeof count !== 'number' || count < 0) {
        return "Error in string or count.";
    }
    
    let repeatedString = '';
    for (let i = 0; i < count; i++) {
        repeatedString += str;
    }
    
    return repeatedString;
}
console.log(repeat_string('a', 4)); 
console.log(repeat_string('a'));   