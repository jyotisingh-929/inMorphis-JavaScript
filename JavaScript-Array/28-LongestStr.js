function longestCommonStartingSubstring(arr) {
    if (arr.length === 0) return '';
    
    let commonPrefix = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        let j = 0;
        while (j < commonPrefix.length && j < arr[i].length && commonPrefix[j] === arr[i][j]) {
            j++;
        }
        commonPrefix = commonPrefix.slice(0, j);
        if (commonPrefix === '') break;
    }
    
    return commonPrefix;
}
console.log(longestCommonStartingSubstring(['go', 'google'])); // Output: "go"
console.log(longestCommonStartingSubstring(['flower', 'flow', 'flight'])); // Output: "fl"
console.log(longestCommonStartingSubstring(['dog', 'racecar', 'car'])); // Output: ""
