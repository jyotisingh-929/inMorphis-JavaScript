function findFactoral(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * findFactoral( n - 1 );
}
let n = 5;
let result = findFactoral(n);
console.log(`The factorial of ${n} is ${result}`);