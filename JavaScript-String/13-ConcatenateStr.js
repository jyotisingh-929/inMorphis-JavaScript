function repeat(str, n = 1) {
    let repeatedString = '';

    for (let i = 0; i < n; i++) {
        repeatedString += str;
    }

    return repeatedString;
}
console.log(repeat('Ha!'));  
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));
