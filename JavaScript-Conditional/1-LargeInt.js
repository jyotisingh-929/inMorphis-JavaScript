function displayLargerNumber(a, b) {
    if (a > b) {
        console.log(`${a} is larger than ${b}`);
    } else if (b > a) {
        console.log(`${b} is larger than ${a}`);
    } else {
        console.log(`${a} and ${b} are equal`);
    }
}
let num1 = 42;
let num2 = 56;
displayLargerNumber(num1, num2);
