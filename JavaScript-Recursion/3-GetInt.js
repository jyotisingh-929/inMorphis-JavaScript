function getRange(x, y) {
    let result = [];
    
    for (let i = x + 1; i < y; i++) {
        result.push(i);
    }
    return result;
}
let start = 2;
let end = 9;
let output = getRange(start, end);
console.log(`Integers in range (${start}, ${end}) are: ${output}`);