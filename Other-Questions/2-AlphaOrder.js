function sortStringAlphabetically(str) {
    let chars = str.split('');

    let sortedChars = chars.sort();

    let sortedString = sortedChars.join('');

    return sortedString;
}
let inputString = "hello";
let sortedString = sortStringAlphabetically(inputString);
console.log(sortedString);  
