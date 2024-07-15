function isEven(number) {
    return number % 2 === 0;
}
let num = 42;
if (isEven(num)) {
    console.log(`${num} is even.`);
} else {
    console.log(`${num} is not even.`);
}
