function truncate(str, numWords) {
    // Split the string into words
    let words = str.split(' ');

    let truncatedWords = words.slice(0, numWords);

    let truncatedStr = truncatedWords.join(' ');

    return truncatedStr;
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
