function ascii_to_hexa(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        let hexChar = str.charCodeAt(i).toString(16);
        hex += hexChar.padStart(2, '0'); // Ensure two digits per character
    }
    return hex;
}
console.log(ascii_to_hexa('12'));   // Output: "3132"
console.log(ascii_to_hexa('100'));  // Output: "313030"
