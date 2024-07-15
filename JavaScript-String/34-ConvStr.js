function sentenceCase(str) {
    // Split the string into words
    let words = str.toLowerCase().split(' ');
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(' ');
}
console.log(sentenceCase('PHP exercises. python exercises.'));
