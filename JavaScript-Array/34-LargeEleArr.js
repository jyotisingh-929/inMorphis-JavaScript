function nthLargest(arr, n) {
    if (n > arr.length) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr[n - 1];
}
console.log(nthLargest([43, 56, 23, 90, 88, 90, 99, 652], 4)); // Output: 89
