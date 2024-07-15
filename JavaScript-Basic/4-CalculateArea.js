function calculateAreaOfTriangle(a, b, c) {
    let s = (a + b + c) / 2;

    let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));

    return area;
}
let a = 5;
let b = 6;
let c = 7;

let result = calculateAreaOfTriangle(a, b, c);
console.log(result);