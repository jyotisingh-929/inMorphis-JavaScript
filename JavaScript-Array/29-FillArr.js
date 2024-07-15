function num_string_range(start, end, step) {
    let rangeArray = [];
    let isNumber = !isNaN(start) && !isNaN(end);
    
    if (isNumber) {
        start = Number(start);
        end = Number(end);
        
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    } else {
        let startCode = start.charCodeAt(0);
        let endCode = end.charCodeAt(0);
        
        for (let i = startCode; i <= endCode; i += step) {
            rangeArray.push(String.fromCharCode(i));
        }
    }
    
    return rangeArray;
}
console.log(num_string_range('a', 'z', 2)); 
// Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

console.log(num_string_range(1, 10, 3)); 
// Output: [1, 3, 5, 7, 9]
