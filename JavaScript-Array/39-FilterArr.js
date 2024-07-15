function array_filter(arr) {
    let filArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] != false && arr[i] != '' && arr[i] != 0 && arr[i] != null){
            filArr.push(arr[i]);
        }
    }
    return filArr;
}
console.log(array_filter([58, '', 'abcd', true, null, false, 0])); 
