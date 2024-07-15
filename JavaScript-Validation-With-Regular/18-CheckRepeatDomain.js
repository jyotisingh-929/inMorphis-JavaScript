function isDomain(value) {
    // Regular expression to match domain name format
    const domainPattern = /^(?![0-9]+$)(?!-)(?:[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}$/;

    return domainPattern.test(value);
}
console.log(isDomain("example.com")); // Output: true
console.log(isDomain("sub.example.com")); // Output: true
console.log(isDomain("sub-domain.example.com")); // Output: true
console.log(isDomain("example.co.uk")); // Output: true
console.log(isDomain("example.org")); // Output: true
console.log(isDomain("-example.com")); // Output: false (domain name cannot start with a hyphen)
console.log(isDomain("example.com-")); // Output: false (domain name cannot end with a hyphen)
console.log(isDomain("example")); // Output: false (missing top-level domain)
console.log(isDomain("example.com/")); // Output: false (contains invalid characters)
console.log(isDomain("")); // Output: false (empty string)
