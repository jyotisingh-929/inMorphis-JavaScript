function findLargestOfFive(a, b, c, d, e) {
    let largest = a;

    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    if (d > largest) {
        largest = d;
    }
    if (e > largest) {
        largest = e;
    }

    alert(`The largest number is ${largest}`);
}
let num1 = -5;
let num2 = -2;
let num3 = -6;
let num4 = 0;
let num5 = -1;
findLargestOfFive(num1, num2, num3, num4, num5);