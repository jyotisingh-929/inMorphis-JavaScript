function lowercase_meridiem() {
    const meridiems = ['ante meridiem', 'post meridiem'];
    
    return meridiems;
}
const [am, pm] = lowercase_meridiem();
console.log(am); // Output: "ante meridiem"
console.log(pm); // Output: "post meridiem"
