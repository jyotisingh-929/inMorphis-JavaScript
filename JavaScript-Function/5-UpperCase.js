function capitalizeWord(str) {
    let word = str.split(' ');
    
    for(let i=0; i<word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    return word.join(' ');
}
let result = capitalizeWord("the quick brown fox");
console.log(result);