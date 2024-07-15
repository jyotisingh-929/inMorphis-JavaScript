function remove_first_occurrence(str, searchStr) {
    let index = str.indexOf(searchStr);
    
    if (index !== -1) {
        return str.slice(0, index) + str.slice(index + searchStr.length);
    }
    
    return str;
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
