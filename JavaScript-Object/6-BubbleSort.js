function bubbleSort(arr) {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}
let arr = [6, 4, 0, 3, -2, 1];
console.log("Original array:", arr);

let sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);
