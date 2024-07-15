function remove_non_word(str) {
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a word character or space
        if (/[A-Za-z0-9_\- ]/.test(str[i])) {
            cleanStr += str[i];
        }
    }
    return cleanStr;
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));
