function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}
console.log(isValidURL("https://www.example.com")); // Output: true
console.log(isValidURL("http://example.com")); // Output: true
console.log(isValidURL("www.example.com")); // Output: false
console.log(isValidURL("example.com")); // Output: false
console.log(isValidURL("http://example.com/path/to/page")); // Output: true
console.log(isValidURL("https://subdomain.example.co.in")); // Output: true
console.log(isValidURL("ftp://example.com")); // Output: true (valid scheme)
