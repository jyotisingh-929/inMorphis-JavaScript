function capitalize(input) {
    if (input.length === 0) return '';
    
    // Capitalize the first letter and concatenate with the rest of the string
    return input.charAt(0).toUpperCase() + input.slice(1);
}
console.log(capitalize('js string exercises')); 
console.log(capitalize('hello world')); 
console.log(capitalize('capitalize me!')); 
console.log(capitalize('')); 
