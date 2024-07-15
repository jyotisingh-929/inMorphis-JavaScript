function longestWord(str) {
    let word = str.split(' ');
    let longest = '';

    for(let i=0; i<word.length; i++){
        if(word[i].length > longest.length){
            longest = word[i];
        }
    }
    return longest;
}
let result = longestWord("Web Development Tutorial");
console.log(result);