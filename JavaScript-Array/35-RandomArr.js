function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
const sampleArray = [43, 56, 23, 89, 88, 90, 99, 652];
console.log(getRandomItem(sampleArray)); 
