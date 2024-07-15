function swapcase(input) {
    let swapped = '';

    for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i);

        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        }
        else if (char === char.toLowerCase()) {
            swapped += char.toUpperCase();
        }
        else {
            swapped += char;
        }
    }

    return swapped;
}
console.log(swapcase('AaBbc')); 
console.log(swapcase('Hello World'));
console.log(swapcase('JavaScript')); 
console.log(swapcase('12345')); 
console.log(swapcase('')); 
