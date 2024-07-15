function isIPAddress(value) {
    // Regular expression to match IPv4 and IPv6 addresses
    const ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

    return ipPattern.test(value);
}
const ip1 = "192.168.0.1";
const ip2 = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
const ip3 = "256.0.0.1"; // Invalid IPv4
const ip4 = "2001:0db8:85a3::8a2e:0370:7334:invalid"; // Invalid IPv6

console.log(isIPAddress(ip1)); // Output: true
console.log(isIPAddress(ip2)); // Output: true
console.log(isIPAddress(ip3)); // Output: false
console.log(isIPAddress(ip4)); // Output: false
