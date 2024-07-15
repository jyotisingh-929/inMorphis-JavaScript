function findSecondGreatestAndLowest(arr) {
    arr.sort((a, b) => a -b);
    let secondLowest = arr[1];
    let secondGreatest = arr[arr.length - 2];

    return `${secondLowest} , ${secondGreatest}`;
}
let arr = [1, 2, 3, 5, 6, 4];
console.log(findSecondGreatestAndLowest(arr));