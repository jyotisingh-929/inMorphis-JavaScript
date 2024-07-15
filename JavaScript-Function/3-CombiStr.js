function genrateCombination(str) {
    let combination = [];
    for(let i=0; i<str.length + 1; i++){
        for(let j=i+1; j<str.length + 1; j++){
            combination.push(str.slice(i,j));
        }
    }
    return combination;
}
let result = genrateCombination("dog");
console.log(result);