function pluck(arr, key) {
    return arr.map(item => item[key]);
}
let sampleArray = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Jim', age: 35}
];
let result = pluck(sampleArray, 'age');
console.log(result); 
