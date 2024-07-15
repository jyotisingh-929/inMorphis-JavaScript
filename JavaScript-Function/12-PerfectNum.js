function checkPerfectNum(num) {
    if(num <= 1){
        return false;
    }
    let sum = 1;
    for(let i = 2; i * i <= num; i++){
        if(num % i === 0){
            sum += i;
            if(i !== num / i){
                sum += num / i;
            }
        }
    }
    return sum === num;
}
console.log(checkPerfectNum(6));
console.log(checkPerfectNum(28));
console.log(checkPerfectNum(496));
console.log(checkPerfectNum(8128));
console.log(checkPerfectNum(27));
