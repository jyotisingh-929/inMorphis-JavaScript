function array_range(start, length) {
    let fillArr = [];
    for(let i=0; i<length; i++){
        fillArr.push(start);
        start++;
    }
    
    return fillArr;
}
console.log(array_range(1, 4)); 
console.log(array_range(-6, 4)); 