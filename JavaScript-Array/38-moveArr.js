function move(arr, from, to) {
    if (from < 0) {
        from += arr.length;
    }
    if (to < 0) {
        to += arr.length;
    }

    if (from >= 0 && from < arr.length && to >= 0 && to < arr.length) {
        const element = arr.splice(from, 1)[0]; 
        arr.splice(to, 0, element); 
    }

    return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2)); 
console.log(move([10, 20, 30, 40, 50], -1, -2)); 
