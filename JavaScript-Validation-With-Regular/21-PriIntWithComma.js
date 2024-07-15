function thousands_separators(num) {
    // Convert the number to a string and split it into integer and decimal parts
    let parts = num.toString().split('.');
    // Regex to match every 3 digits from the end
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // Join the integer and decimal parts, if any
    return parts.join('.');
}
console.log(thousands_separators(1000));      // Output: "1,000"
console.log(thousands_separators(10000.23));  // Output: "10,000.23"
console.log(thousands_separators(100000));    // Output: "100,000"
