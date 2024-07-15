let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

let sortedArr = sortArray(arr1);

console.log(sortedArr.join(',')); // Output: -4,1,2,3,3,5,6,7,8
