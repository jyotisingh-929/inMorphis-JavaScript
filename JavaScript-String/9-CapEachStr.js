function capitalize_Words(input) {
    let words = input.split(/\s+/);
    
    let capitalizedWords = [];
    
    for (let word of words) {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        
        capitalizedWords.push(capitalizedWord);
    }
    
    return capitalizedWords.join(' ');
}
console.log(capitalize_Words('js string exercises'));
console.log(capitalize_Words('hello world')); 
console.log(capitalize_Words('capitalize me!'));
console.log(capitalize_Words('')); 