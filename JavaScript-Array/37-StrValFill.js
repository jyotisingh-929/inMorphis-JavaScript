function array_filled(length, value) {
    let fillArr = [];
    for(let i=0; i<length; i++){
        fillArr.push(value);
    }
    return fillArr;
}
console.log(array_filled(3, 'default value')); 
console.log(array_filled(7, 'password')); 