function count(str, substr, caseSensitive = true) {
    let count = 0;
    if (!caseSensitive) {
        str = str.toLowerCase();
        substr = substr.toLowerCase();
    }
    
    let index = str.indexOf(substr);
    while (index !== -1) {
        count++;
        index = str.indexOf(substr, index + 1);
    }
    
    return count;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));  
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false)); 
