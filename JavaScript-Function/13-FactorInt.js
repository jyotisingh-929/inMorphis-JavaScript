function findFactor(num) {
    let factors = [];

    for(let i = 1; i <= num / 2; i++){
        if(num % i === 0){
            factors.push(i);
        }
    }
    factors.push(num);
    return factors;
}
console.log(findFactor(28));
console.log(findFactor(12));
console.log(findFactor(15));
console.log(findFactor(11));
console.log(findFactor(1));