function findFibonacci(n) {
    let fibSequence = [];
    if (n >= 1) fibSequence.push(0);
    if (n >= 2) fibSequence.push(1);
    
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    
    return fibSequence;
}
let count = 10;
let output = findFibonacci(count);
console.log(`The first ${count} Fibonacci numbers are: ${output}`);
