function rangeBetween(start, end) {
    let rangeArray = [];
    for (let i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}
console.log(rangeBetween(4, 7)); 
console.log(rangeBetween(-4, 7)); 
