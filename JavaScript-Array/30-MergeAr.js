function merge_array(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let uniqueArray = [...new Set(mergedArray)];
    return uniqueArray;
}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2)); 
