function getSubsets(arr, subsetLength) {
    let result = [];

    function generateSubsets(start, subset) {
        
        if (subset.length === subsetLength) {
            result.push([...subset]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]);
            generateSubsets(i + 1, subset);
            subset.pop();
        }
    }

    generateSubsets(0, []);
    return result;
}
let sampleArray = [1, 2, 3];
let subsetLength = 2;
let subsets = getSubsets(sampleArray, subsetLength);
console.log("All possible subsets of length", subsetLength, ":", subsets);
