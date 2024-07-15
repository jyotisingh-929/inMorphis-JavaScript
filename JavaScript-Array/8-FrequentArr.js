let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequentItem(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (frequency[item] === undefined) {
            frequency[item] = 1;
        } else {
            frequency[item]++;
        }

        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }

    return `${mostFrequent} ( ${maxCount} times )`;
}
console.log(mostFrequentItem(arr1)); 
