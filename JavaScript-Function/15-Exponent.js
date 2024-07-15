function exponent(b, n) {
    let result = 1;
    for(let i=1; i<=n; i++){
        result = b * result;
    }
    return result;
}
console.log(exponent(2, 3));