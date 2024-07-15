function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let shuffledColors = shuffleArray(colors);
console.log(shuffledColors);
