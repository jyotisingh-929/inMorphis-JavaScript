function generateSubsets(str) {
    let subsets = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subset = str.slice(i, j); 
            subsets.push(subset); 
        }
    }

    return subsets;
}
let str = "dog";
let result = generateSubsets(str);
console.log("Input string:", str);
console.log("Subset array:", result);
