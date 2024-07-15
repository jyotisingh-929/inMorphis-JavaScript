function last(arr, n) {
    if (n === undefined) {
        return arr[arr.length - 1];
    }
    if (n <= 0) {
        return [];
    }
    return arr.slice(-n);
}
console.log(last([7, 9, 0, -2]));        // -2
console.log(last([7, 9, 0, -2], 3));     // [9, 0, -2]
console.log(last([7, 9, 0, -2], 6));     // [7, 9, 0, -2]
