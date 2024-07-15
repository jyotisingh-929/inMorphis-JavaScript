function getUniqueChar(str){
    let uniqChar = "";
    for(let i=0; i<str.length; i++){
        if(uniqChar.indexOf(str.charAt(i)) == -1){
            uniqChar += str[i];
        }
    }
    return uniqChar;
}
let result = getUniqueChar("thequickbrownfoxjumpsoverthelazydog");
console.log(result);