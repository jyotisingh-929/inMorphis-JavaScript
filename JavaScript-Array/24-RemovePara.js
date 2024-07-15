function removeFalsyValues(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== null && arr[i] !== 0 && arr[i] !== "" && arr[i] !== false && arr[i] !== undefined && !Number.isNaN(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr
}
let sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
let result = removeFalsyValues(sampleArray);
console.log(result); 
