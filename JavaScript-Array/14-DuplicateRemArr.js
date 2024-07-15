function removeDuplicates(arr) {
    let uniqueArray = [];

    let seenItems = new Set();

    arr.forEach(item => {
        let lowerCaseItem = item.toLowerCase();
        if (!seenItems.has(lowerCaseItem)) {
            seenItems.add(lowerCaseItem);
            uniqueArray.push(item);
        }
    });

    return uniqueArray;
}
let arrayWithDuplicates = ["Apple", "Banana", "apple", "Orange", "BANANA", "orange", "Grape"];
let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates); 
