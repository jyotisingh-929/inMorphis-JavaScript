function search_word(str, word) {
    // Split the string by spaces to count occurrences
    let words = str.split(' ');
    
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }

    let message = `'${word}' was found ${count} times.`;
    
    return message;
}
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
