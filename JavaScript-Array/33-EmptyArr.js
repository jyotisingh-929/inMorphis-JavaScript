function emptyArray(arr) {
    arr.length = 0;
}
let array1 = [1, 2, 3, 4, 5];
console.log('Original array before emptying:', array1); // Output: [1, 2, 3, 4, 5]

emptyArray(array1);
console.log('Original array after emptying:', array1); // Output: []
