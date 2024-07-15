function elementsLargerThan(arr, num){
    let largeArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            largeArr.push(arr[i]);
        }
    }
    return largeArr;
}
let arr = [1, 5, 7, 3, 9, 2, 4];
let num = 4;
let largerElements = elementsLargerThan(arr, num);
console.log("Elements larger than", num, ":", largerElements);