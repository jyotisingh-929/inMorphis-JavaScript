function array_filled(length, value) {
    let fillArr = [];
    for(let i=0; i<length; i++){
        fillArr.push(value);
    }
    return fillArr;
}
console.log(array_filled(6, 0)); 
console.log(array_filled(4, 11)); 