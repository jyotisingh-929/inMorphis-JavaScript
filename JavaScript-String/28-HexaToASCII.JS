function hex_to_ascii(hexStr) {
    let asciiStr = '';
    for (let i = 0; i < hexStr.length; i += 2) {
        let hexPair = hexStr.substr(i, 2);  // Get two hexadecimal digits
        let asciiChar = String.fromCharCode(parseInt(hexPair, 16)); 
        asciiStr += asciiChar;
    }
    return asciiStr;
}
console.log(hex_to_ascii('3132'));    // Output: "12"
console.log(hex_to_ascii('313030'));  // Output: "100"
