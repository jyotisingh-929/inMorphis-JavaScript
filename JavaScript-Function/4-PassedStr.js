function sortString(str) {
    // Convert the string to an array of characters  
    let convetStrToArr = str.split('');
    // sort it,
    let sortArr = convetStrToArr.sort();
    // and join it back into a string
    let joinStr = sortArr.join('');
    
    return joinStr;
}
let result = sortString('webmaster');
console.log(result); 