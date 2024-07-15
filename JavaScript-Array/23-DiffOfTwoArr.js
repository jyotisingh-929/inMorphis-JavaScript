function flattenDeep(array) {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

function difference(array1, array2) {
    let flatArray1 = flattenDeep(array1);
    let flatArray2 = flattenDeep(array2);
    
    let diff1 = flatArray1.filter(x => !flatArray2.includes(x));
    let diff2 = flatArray2.filter(x => !flatArray1.includes(x));
    
    return [...new Set([...diff1, ...diff2])];
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

console.log(difference([1, 2, 3], [100, 2, 1, 10]));