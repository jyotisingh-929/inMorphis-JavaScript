function sortThreeNumbers(a, b, c) {
    let largest, middle, smallest;

    if (a >= b && a >= c) {
        largest = a;
        if (b >= c) {
            middle = b;
            smallest = c;
        } else {
            middle = c;
            smallest = b;
        }
    } else if (b >= a && b >= c) {
        largest = b;
        if (a >= c) {
            middle = a;
            smallest = c;
        } else {
            middle = c;
            smallest = a;
        }
    } else {
        largest = c;
        if (a >= b) {
            middle = a;
            smallest = b;
        } else {
            middle = b;
            smallest = a;
        }
    }

    alert(`Sorted numbers: ${largest}, ${middle}, ${smallest}`);
}
let num1 = 0;
let num2 = -1;
let num3 = 4;
sortThreeNumbers(num1, num2, num3);
