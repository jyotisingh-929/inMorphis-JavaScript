function string_chop(str, len = 0) {
    if (len <= 0 || len >= str.length) return [str];
    
    let chunks = [];
    for (let i = 0; i < str.length; i += len) {
        chunks.push(str.slice(i, i + len));
    }
    
    return chunks;
}
console.log(string_chop('w3resource'));    // Output: ["w3resource"]
console.log(string_chop('w3resource', 2)); // Output: ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3)); // Output: ["w3r", "eso", "urc", "e"]
