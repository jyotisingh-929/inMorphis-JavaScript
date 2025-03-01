function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++; 
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
let sampleArray = [34, 7, 23, 32, 5, 62];
let sortedArray = mergeSort(sampleArray);
console.log(`Sorted array: ${sortedArray}`);
