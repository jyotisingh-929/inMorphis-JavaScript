function string_endsWith(str, suffix) {
    if (suffix === '') {
        return true; // An empty suffix is always considered to be at the end
    }
    
    if (str.length < suffix.length) {
        return false; // If string length is less than suffix length, it can't end with the suffix
    }
    
    // Compare substrings
    for (let i = 0; i < suffix.length; i++) {
        if (str[str.length - suffix.length + i] !== suffix[i]) {
            return false; // If characters don't match, return false
        }
    }
    
    return true; // If all characters match, return true
}
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); // Output: true
console.log(string_endsWith('JS PHP PYTHON', '')); // Output: true
console.log(string_endsWith('JS PHP PYTHON', 'PHP')); // Output: false
