function difference(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const uniqueElements = [];
    
    for (let i = 0; i < combinedArray.length; i++) {
        if (uniqueElements.indexOf(combinedArray[i]) === -1) {
            uniqueElements.push(combinedArray[i]);
        }
    }
    
    return uniqueElements;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // Output: [1, 2, 3, 100, 10]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [4]], [5, 6]])); 
