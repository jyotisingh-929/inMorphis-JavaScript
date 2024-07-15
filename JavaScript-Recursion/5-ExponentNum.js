function findExponent(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}
let base = 8;
let exp = 2;
let output = findExponent(base, exp);
console.log(`${base} to the power of ${exp} is ${output}`);
