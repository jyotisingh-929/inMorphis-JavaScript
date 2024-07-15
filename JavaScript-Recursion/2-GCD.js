function findGCD(a, b){
    if(b === 0){
        return a;
    }
    return findGCD(b, a % b);
}
let a = 56;
let b = 98;
let result = findGCD(a, b);
console.log(`The GCD of ${a} and ${b} is ${result}`);