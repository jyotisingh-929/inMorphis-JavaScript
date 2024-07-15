function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
     let countVowel = 0;
     for(let char of str){
        if(vowels.includes(char)){
            countVowel++;
        }
     }
     return countVowel;
}
let result = countVowels('The quick brown fox');
console.log(result);