function countOccurrences(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

let str = 'w3resource.com';
let letter = 'o';
let occurrences = countOccurrences(str, letter);
console.log(`Number of occurrences of '${letter}' in '${str}' :`, occurrences);
