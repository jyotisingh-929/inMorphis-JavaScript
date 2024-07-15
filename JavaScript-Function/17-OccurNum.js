function countOccurrenceLetter(str){
    let counts = {};

    for(let char of str){
        if(!char.match(/[a-zA-Z]/)){
            continue;
        }

        char = char.toLowerCase();

        if(counts[char]){
            counts[char]++;
        }else{
            counts[char] = 1;
        }
    }
    return counts;
}
let result = countOccurrenceLetter("The quick brown fox jumps over the lazy dog");
console.log(result);