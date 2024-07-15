function is_Blank(input) {
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ' && input[i] !== '\t' && input[i] !== '\n' && input[i] !== '\r') {
            return false; 
        }
    }
    return true; 
}
console.log(is_Blank(''));   
console.log(is_Blank('abc')); 
console.log(is_Blank('   ')); 
console.log(is_Blank('\t'));  
