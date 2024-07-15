function subStrAfterChars(str, char, occurrence) {
    let index = str.indexOf(char);
    if (index === -1) return "";
    
    for (let i = 1; i < occurrence; i++) {
        index = str.indexOf(char, index + 1);
        if (index === -1) return "";
    }
    
    return str.substr(index + 1);
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 1)); // Output: " JavaScript Exercises"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 1)); // Output: "xercises"
