function findSignOfProduct(a, b, c) {
    let product = a * b * c;
    if (product > 0) {
        alert("The sign is +");
    } else if (product < 0) {
        alert("The sign is -");
    } else {
        alert("The product is 0");
    }
}
let num1 = 3;
let num2 = -7;
let num3 = 2;
findSignOfProduct(num1, num2, num3);
