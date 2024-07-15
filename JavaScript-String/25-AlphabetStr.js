function alphabetize_string(str) {
    let charArray = str.split('');
    
    let sortedArray = charArray.sort();
    
    let sortedString = sortedArray.join('');
    
    return sortedString;
}

console.log(alphabetize_string('United States'));
