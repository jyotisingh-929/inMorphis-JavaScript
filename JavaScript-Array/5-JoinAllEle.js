let myColor = ["Red", "Green", "White", "Black"];

let joinedWithComma = myColor.join(",");
let joinedWithCommaDefault = myColor.join(); // Default separator is a comma
let joinedWithPlus = myColor.join("+");

console.log(joinedWithComma);          // "Red,Green,White,Black"
console.log(joinedWithCommaDefault);   // "Red,Green,White,Black"
console.log(joinedWithPlus);           // "Red+Green+White+Black"
