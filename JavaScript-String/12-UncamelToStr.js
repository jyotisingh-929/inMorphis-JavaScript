function uncamelize(str, delimiter = ' ') {
    let uncamelized = '';
    
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let nextChar = str.charAt(i + 1);
        
        // Check if current character is uppercase and not the first character
        if (char === char.toUpperCase() && i > 0) {
            // Add delimiter before uppercase letter if not the first character
            uncamelized += delimiter + char.toLowerCase();
        } else {
            // Otherwise, add the character as is
            uncamelized += char;
        }
    }
    
    return uncamelized;
}
console.log(uncamelize('helloWorld')); // Output: "hello world"
console.log(uncamelize('helloWorld', '-')); // Output: "hello-world"
console.log(uncamelize('helloWorld', '_')); // Output: "hello_world"
