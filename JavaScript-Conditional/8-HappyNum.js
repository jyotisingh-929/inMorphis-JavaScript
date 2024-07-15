function sumOfSquaresOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

function isHappyNumber(num) {
    let seen = new Set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = sumOfSquaresOfDigits(num);
    }
    return num === 1;
}

function findFirstNHappys(n) {
    let count = 0;
    let num = 1;
    let happyNumbers = [];
    
    while (count < n) {
        if (isHappyNumber(num)) {
            happyNumbers.push(num);
            count++;
        }
        num++;
    }
    
    return happyNumbers;
}
let first5HappyNumbers = findFirstNHappys(5);
console.log("The first 5 happy numbers are:", first5HappyNumbers);
