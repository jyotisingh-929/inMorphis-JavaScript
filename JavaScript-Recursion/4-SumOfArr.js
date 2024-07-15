function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var array = [1, 2, 3, 4, 5, 6];
var result = sumArray(array);
console.log(`The sum of the array is ${result}`);
