function bubbleSort(arr) {
    let n = arr.length;
    let swap;

    do {
        swap= false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) { 
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swap = true;
            }
        }
        n--; 
    } while (swap);

    return arr;
}

let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
let sortedArray = bubbleSort(arr);
console.log("Sorted array:", sortedArray);
