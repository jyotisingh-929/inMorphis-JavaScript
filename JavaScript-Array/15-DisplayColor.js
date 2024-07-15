let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let ordinals = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    let position = index + 1;
    let ordinal = (position % 10 <= 3 && position % 10 !== 0 && (position < 11 || position > 13)) ? ordinals[position % 10] : ordinals[0];
    console.log(`${position}${ordinal} choice is ${color.trim()}.`);
});
