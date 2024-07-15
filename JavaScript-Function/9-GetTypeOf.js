function getDataType(argu) {
    return typeof argu;
}
console.log(getDataType(42));          
console.log(getDataType('Hello'));     
console.log(getDataType(true));        
console.log(getDataType({}));          
console.log(getDataType(function(){}));
console.log(getDataType(undefined)); 