function strip(str) {
    // Remove leading spaces
    while (str.charAt(0) === ' ') {
        str = str.slice(1);
    }
    
    // Remove trailing spaces
    while (str.charAt(str.length - 1) === ' ') {
        str = str.slice(0, -1);
    }
    
    return str;
}
console.log(strip('w3resource '));   // Output: "w3resource"
console.log(strip(' w3resource'));   // Output: "w3resource"
console.log(strip(' w3resource '));  // Output: "w3resource"
