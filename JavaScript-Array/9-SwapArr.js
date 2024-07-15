function swapCase(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

let inputStr = 'The Quick Brown Fox';
let outputStr = swapCase(inputStr);
console.log(outputStr); // Output: tHE qUICK bROWN fOX
