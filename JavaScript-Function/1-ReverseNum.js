function reverseNumber(num) {
    let numStr = num.toString();
    let reverseStr = '';
    for(let i=numStr.length-1; i>=0; i--){
        reverseStr += numStr[i];
    }
    return parseInt(reverseStr);
}

let num = 32243;
let reversedNum = reverseNumber(num);
console.log(reversedNum);