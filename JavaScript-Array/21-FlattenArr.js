function flatten(array, shallow = false) {
    if (shallow) {
        return array.reduce((acc, val) => acc.concat(val), []);
    } else {
        return array.reduce((acc, val) => 
            Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }
}
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));

console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));