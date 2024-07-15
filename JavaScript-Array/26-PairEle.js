function findPairWithSum(arr, target) {
    let indices = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (complement in indices) {
            return [indices[complement], i];
        }
        indices[arr[i]] = i;
    }
    return null;
}
let numbers = [10, 20, 10, 40, 50, 60, 70];
let target = 50;
let result = findPairWithSum(numbers, target);
console.log(result); 
