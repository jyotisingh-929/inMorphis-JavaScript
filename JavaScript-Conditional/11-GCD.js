function computeGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

const num1 = 36;
const num2 = 60;
const gcd = computeGCD(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);
