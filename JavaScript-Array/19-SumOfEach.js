function sumArrays(array1, array2) {
    let maxLength = Math.max(array1.length, array2.length);
    let resultArray = [];

    for (let i = 0; i < maxLength; i++) {
        let value1 = array1[i] !== undefined ? array1[i] : 0;
        let value2 = array2[i] !== undefined ? array2[i] : 0;
        resultArray.push(value1 + value2);
    }

    return resultArray;
}
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
let sumArray = sumArrays(array1, array2);
console.log(sumArray); 
