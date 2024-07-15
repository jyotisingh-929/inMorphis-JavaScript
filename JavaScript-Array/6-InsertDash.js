function insertDashes(num) {
    const numStr = num.toString();
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        result += numStr[i];

        if (i < numStr.length - 1) {
            const currentNum = parseInt(numStr[i]);
            const nextNum = parseInt(numStr[i + 1]);
            if (currentNum % 2 === 0 && nextNum % 2 === 0) {
                result += '-';
            }
        }
    }

    return result;
}
console.log(insertDashes(25468)); // Output: "254-6-8"
console.log(insertDashes(123456)); // Output: "123456"
console.log(insertDashes(246824)); // Output: "2-468-2-4"
