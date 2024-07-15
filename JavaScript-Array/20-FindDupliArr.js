function findDuplicates(arr) {
    let duplicates = [];
    let counts = {};

    arr.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
        if (counts[item] === 2) {
            duplicates.push(item);
        }
    });

    return duplicates;
}
let array = [1, 2, 3, 4, 5, 2, 3, 6, 7, 3, 8, 9, 1];
let duplicateValues = findDuplicates(array);
console.log(duplicateValues); 